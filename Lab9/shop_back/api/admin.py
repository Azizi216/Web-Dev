from django.contrib import admin

from .models import Product, Category


admin.site.register(Category)
class categoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)








@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'category')
    search_fields = ('name',)



# Register your models here.
