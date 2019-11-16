from flask import Flask
from flask import request
from flask_cors import CORS
import csv
import csv
import json
app = Flask(__name__)
CORS(app)


def userFileRead():
    userData = []
    with open('../data/users.csv', 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for line in reader:
            userData.append(line)
    return userData

def userFileWrite(arr):
        with open('../data/users.csv', 'w') as csvfile:            
            fieldnames = ['id', 'name', 'email', 'mobile', 'password','personType']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            for i in range(len(arr)):            
                writer.writerow({'id' : arr[i]['id'], 'name' : arr[i]['name'], 'email' : arr[i]['email'], 'mobile' : arr[i]['mobile'], 'password' : arr[i]['password'], 'personType' : arr[i]['personType']})
        return 'Succesfully Added'

def readFile():
    foodData = []
    with open('../data/foodData.csv', 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for line in reader:
            foodData.append(line)
    return foodData
     
def writeFiles(arr):
        with open('../data/foodData.csv', 'w') as csvfile:            
            fieldnames = ['id', 'title', 'resturantName', 'price', 'image', 'description', 'paragraph', 'userId']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            for i in range(len(arr)):            
                writer.writerow({'id' : arr[i]['id'], 'title' : arr[i]['title'], 'resturantName' : arr[i]['resturantName'], 'price' : arr[i]['price'], 'image' : arr[i]['image'], 'description' : arr[i]['description'], 'paragraph' : arr[i]['paragraph']})
        return 'Succesfully Added'


@app.route('/user/login', methods = ['Post'])
def userLogin():
    arr = []    
    email = request.json['email']
    password = request.json['password']
    arr = userFileRead()
    for i in range(len(arr)):
        if arr[i]['email'] == email and arr[i]['password'] == password:
            return ({'id': arr[i]['id'], 'name' : arr[i]['name'], 'email' : arr[i]['email'], 'mobile' : arr[i]['mobile'], 'password' : arr[i]['password'], 'personType' : arr[i]['personType']})
    # print(arr)    
    return json.dumps('User Data Not Match')

@app.route('/user/register', methods = ['Post'])
def userRegistration():
    arr = []    
    name = request.json['name']    
    email = request.json['email']
    mobile = request.json['mobile']
    password = request.json['password']
    arr = userFileRead()
    for i in range(len(arr)):
        if arr[i]['email'] == email:
            return json.dumps('User Exited')
    if len(arr) == 0:
        id = '1'
    else:
        id = int(arr[-1]['id']) + 1  
    arr.append({'id': id, 'name' : name, 'email' : email, 'mobile' : mobile, 'password' : password, 'personType' : 'user'})
    userFileWrite(arr)
    return json.dumps({'id': id, 'name' : name, 'email' : email, 'mobile' : mobile, 'password' : password,})


@app.route('/admin/login', methods = ['Post'])
def adminLogin():
    arr = []    
    email = request.json['email']
    password = request.json['password']
    arr = userFileRead()
    for i in range(len(arr)):
        if arr[i]['email'] == email and arr[i]['password'] == password:
            return ({'id': arr[i]['id'], 'name' : arr[i]['name'], 'email' : arr[i]['email'], 'mobile' : arr[i]['mobile'], 'password' : arr[i]['password'], 'personType' : 'admin'})
    # print(arr)    
    return json.dumps('User Data Not Match')

@app.route('/admin/register', methods = ['Post'])
def adminRegistration():
    arr = []    
    name = request.json['name']    
    email = request.json['email']
    mobile = request.json['mobile']
    password = request.json['password']
    arr = userFileRead()
    for i in range(len(arr)):
        if arr[i]['email'] == email:
            return json.dumps('User Exited')
    if len(arr) == 0:
        id = '1'
    else:
        id = int(arr[-1]['id']) + 1  
    arr.append({'id': id, 'name' : name, 'email' : email, 'mobile' : mobile, 'password' : password, 'personType' : 'admin'})
    userFileWrite(arr)
    return json.dumps({'id': id, 'name' : name, 'email' : email, 'mobile' : mobile, 'password' : password, 'personType' : 'admin'})

@app.route('/admin/addFood', methods = ['POST'])
def addFood():
    arr = []
    title = request.json['title']
    resturantName = request.json['resturantName']
    price = request.json['price']
    image = request.json['image']
    description = request.json['description']
    paragraph = request.json['paragraph']
    userId = request.json['userId']    
    arr = readFile()    
    if len(arr) == 0:
        id = '1'
    else:
        id = int(arr[-1]['id']) + 1
    arr.append({'id' : id, 'title' : title, 'resturantName' : resturantName, 'price' : price, 'image' : image, 'description' : description, 'paragraph' : paragraph, 'userId' : userId}) 
    writeFiles(arr)    
    return json.dumps([{'id' : id, 'Status' : 'Succesfully Listed Your Restaurant'}])

@app.route('/home', methods = ['GET'])
def listOfFood():
    arr = []
    arr = readFile()
    # print(arr)
    page = request.args.get('page', default = 1, type = int)
    return json.dumps(arr)