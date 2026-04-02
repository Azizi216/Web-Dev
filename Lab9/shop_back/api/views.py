from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Product
from .models import Category
from .serializers import ProductSerializer, ProductSerializer2, CategorySerializer
from django.views.decorators.csrf import csrf_exempt
import json


@csrf_exempt

def product_list(request):
    if request.method ==  'GET':

        product_list = Product.objects.all()
        serializer = ProductSerializer2(product_list, many=True)
        return JsonResponse(serializer.data, safe=False)
    
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = ProductSerializer2(data=data)
        if serializer.is_valid():
            serializer.save() # create function will be executed inside the serializer
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    

@csrf_exempt
def product_detail(request, id):
    try:
         product = get_object_or_404(Product, pk=id)
    except Product.DoesNotExist:
        return JsonResponse({"error": "Product not found"}, status=404)
    if request.method == 'GET':
        serializer = ProductSerializer2(product)
        return JsonResponse(serializer.data)
    

    elif request.method == 'PUT':
        data = json.loads(request.body)

        serializer = ProductSerializer2(data=data,  instance=product)
        if serializer.is_valid():
            serializer.save() # update function will be executed inside the serializer
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        product.delete()
        return JsonResponse({"message": "Product deleted successfully"}, status=204)


@csrf_exempt    
def category_list(request):
    if request.method ==  'GET':
        category_list = Category.objects.all()
        serializer = CategorySerializer(category_list, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = CategorySerializer(data=data)
        if serializer.is_valid():
            serializer.save() # create function will be executed inside the serializer
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
        return JsonResponse(category.to_json())
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)
    
def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
        products = Product.objects.filter(category=category)
        data = [Product.to_json(product) for product in products]
        return JsonResponse(data, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)