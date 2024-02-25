from fastapi import FastAPI
from datamodels import Item
from user_models import User
from enum import Enum
from pydantic import BaseModel


app = FastAPI()


# class Category(Enum):
#     Book = 1,
#     Furniture = 2, 
#     Clothing = 3, 
#     Technology = 4, 
#     Other = 5

# use Category.Book to assign

# class Item(BaseModel):
#     """Represents the item that the user is trying to sell."""
#     name: str
#     cost: float
#     description: str
#     category: int


@app.get('/')
async def read_root():
    return {"message": "Hello World"}


@app.post("/items")
async def create_item(name: str, cost: float, description: str, category: int, user_id: str):
    item = Item({
        'name':name,
        'cost':cost,
        'description': description,
        'category': category, 
        'user_id': user_id
    })
    item.save()
    item_id = item.id
    return item_id
    # item_id = item.save().pk
    # print(item_id)
    # return item_id

@app.get("/items/{item_id}")
async def retrieve_item(item_id: str):
    print('item_id', item_id)
    item = Item.get(item_id)
    return item


@app.post("/users")
async def create_user(name: str, phone: int, email: str, username: str, password: str):
    user = User({
        'name': name, 
        'phone' : phone, 
        'email' : email, 
        'username':username, 
        'password': password
    })
    user.save()
    user_id = user.id
    return user_id

@app.get("/users/{user_id}")
async def retrieve_user(user_id: str):
    print('user_id', user_id)
    user = User.get(user_id)
    return user
