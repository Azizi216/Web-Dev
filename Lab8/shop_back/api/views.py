from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category


def product_to_dict(product):
    return {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category': product.category.id
    }

def category_to_dict(category):
    return {
        'id': category.id,
        'name': category.name
    }


#/api/products/

def products_list(request):
    products = Product.objects.all()
    products_json = [product_to_dict(product) for product in products]
    return JsonResponse(products_json, safe=False)


#/api/products/<id>/

def product_details(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(product_to_dict(product))

# /api/categories/

def categories_list(request):
    categories = Category.objects.all()
    categories_json = [category_to_dict(category) for category in categories]
    return JsonResponse(categories_json, safe=False)

#/api/categories/<id>/

def category_deatils(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
        return JsonResponse(category_to_dict(category))
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'})
    
#/api/categories/<id>/products/

def category_products(request, category_id):
    products = Product.objects.filter(category_id=category_id)
    data = [product_to_dict(p) for p in products]
    return JsonResponse(data, safe=False)
    
# Create your views here.
