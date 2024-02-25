import json
import uuid
import redis

r = redis.Redis("localhost", "6379")

class Item:
    def __init__(self, item_dictionary):
        self.item_dictionary = item_dictionary
        self.id = uuid.uuid4().hex
    """Represents the item that the user is trying to sell."""
    @classmethod
    def get(cls, item_id):
        return json.loads(r.get(item_id))
    def save(self):
        item_id = self.id
        r.set(item_id, json.dumps(self.item_dictionary))