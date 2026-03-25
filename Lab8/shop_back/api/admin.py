from django.contrib import admin
from .models import Product, Category

admin.site.register(Product)
admin.site.register(Category)

class productAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'description', 'count', 'is_active', 'category')
    search_fields = ('name')


# Register your models here.
