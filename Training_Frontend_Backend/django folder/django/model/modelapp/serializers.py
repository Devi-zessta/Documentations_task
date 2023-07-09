from rest_framework import serializers
from .models import *
class UserBankdetailsSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='name.username')
    class Meta:
        model = UserBankdetails
        fields =(
            'name','branch','balance_amount','account_no','account_type'
        )