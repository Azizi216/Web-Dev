from django.urls import path

from api import views

urlpatterns = [

    path('products/', views.products_list),
    path('products/<int:product_id>/', views.product_details),
    path('categories/', views.categories_list),
    path('categories/<int:category_id>/', views.category_deatils),
    path('categories/<int:category_id>/products/', views.category_products),
]