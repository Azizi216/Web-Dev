from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Product
from .models import Category
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
import json


@csrf_exempt

def product_list(request):
    if request.method ==  'GET':
        product_list = Product.objects.all()
        data = [Product.to_json(product) for product in product_list]
        return JsonResponse(data, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        product = Product.objects.create(**data)
        return JsonResponse(Product.to_json(product), safe=False)
    
@csrf_exempt
def product_detail(request, id):
    try:
         product = get_object_or_404(Product, pk=id)
    except Product.DoesNotExist:
        return JsonResponse({"error": "Product not found"}, status=404)
    if request.method == 'GET':
        return JsonResponse(product.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        product.name = data['name']
        product.price = data['price']
        product.description = data['description']
        product.category_id = data['category_id']
        product.save()
        return JsonResponse(product.to_json())
    elif request.method == 'DELETE':
        product.delete()
        return JsonResponse({"message": "Product deleted successfully"}, status=204)


    
def category_list(request):
    category_list = Category.objects.all()
    data = [Category.to_json(category) for category in category_list]
    return JsonResponse(data, safe=False)

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