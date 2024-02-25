import json
import uuid

import redis

r = redis.Redis("localhost", "6379")

class User:
    def __init__(self, user_dictionary):
        self.user_dictionary = user_dictionary
        self.id = uuid.uuid4().hex
    """Represents the item that the user is trying to sell."""
    @classmethod
    def get(cls, user_id):
        return json.loads(r.get(user_id))
    def save(self):
        user_id = self.id
        r.set(user_id, json.dumps(self.user_dictionary))
        

    