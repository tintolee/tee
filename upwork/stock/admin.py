from django.contrib import admin

# Register your models here.

from .models import Stock

class StockAdmin(admin.ModelAdmin):
    list_display = ('title' ,'price', 'low', 'high' , 'outstanding')

# Register your models here.

admin.site.register(Stock, StockAdmin)