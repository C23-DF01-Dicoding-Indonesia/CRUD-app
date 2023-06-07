from flask import Flask, request, jsonify
import requests
import pinecone
import os

app = Flask(__name__)
@app.route('/search', methods=['POST'])
def search():
    query = request.json['query']
    print(query)
    result = get_search_result(query)
    return jsonify(data = result)

PINECONE_API_KEY = os.environ.get('PINECONE_API_KEY') or "4b0aec51-befc-40eb-8dda-3cccc07f3965"
PINECONE_ENV = os.environ.get('PINECONE_ENVIRONMENT') or 'asia-southeast1-gcp-free'

def pinecone_init():

    pinecone.init(
        api_key=PINECONE_API_KEY,
        environment=PINECONE_ENV
    )

def get_index(index_name = 'semantic-search'):
    return pinecone.Index(index_name)

def get_embedding(
    text: any, model_name: str = "multi-qa-en-id-mMiniLMv2-L6-H384"
) -> list[float]:
    """
    Embed a single text with hugging face client API.
    unit_test: pass
    """

    API_URL = f"https://api-inference.huggingface.co/models/carlesoctav/{model_name}"
    headers = {"Authorization": "Bearer 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"}
    response = requests.post(API_URL, headers=headers, json=text)
    response = response.json()
    return response[0][0]

def semantic_search(query: str, index_name: str = "semantic-search", top_k: int = 10) -> dict:
    """
    Semantic search of a query in a Pinecone index.
    """
    index = get_index(index_name)
    xq = get_embedding(query)
    xc = index.query(xq, top_k=top_k, include_metadata=True)
    return xc

def get_search_result(query: str) -> list:
    top_k = 5
    index_name = "semantic-search"
    """
    Get search result of a query in a Pinecone index.
    """
    xc = semantic_search(query, index_name, top_k)
    result = []
    for i in xc["matches"]:
        data = {
            "id": i["id"],
            "title": i["metadata"]["title"],
            "type": i["metadata"]["type"],
            "content": i["metadata"]["content"],
            "score": i["score"]
        }
        result.append(data)
    return result

if __name__ == '__main__':
    pinecone_init()
    app.run(host='0.0.0.0', port=8080)