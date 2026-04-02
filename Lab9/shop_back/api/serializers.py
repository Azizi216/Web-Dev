from rest_framework import serializers
from .models import Product, Category

class CategorySerializer(serializers.ModelSerializer):
  
    class Meta:
        model = Category
        fields = '__all__'
class ProductSerializer(serializers.Serializer):
    id = serializers.IntegerField(required=False)
    name = serializers.CharField()
    price = serializers.DecimalField(max_digits=10, decimal_places=2)
    description = serializers.CharField()
    category_id = serializers.IntegerField()
    category = CategorySerializer(read_only=True)

    def create(self, validated_data):
        return Product.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.price = validated_data.get('price', instance.price)
        instance.description = validated_data.get('description', instance.description)
        instance.category_id = validated_data.get('category_id', instance.category_id)
        instance.save()
        return instance
    
class ProductSerializer2(serializers.ModelSerializer):
    category_id = serializers.IntegerField()
    category = CategorySerializer(read_only=True)
    class Meta:
        model = Product
        fields = 'id', 'name', 'price', 'description', 'category_id', 'category'

