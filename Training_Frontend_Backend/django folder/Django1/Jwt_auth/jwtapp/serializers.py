from rest_framework import serializers
from .models import Account

class RegistrationSerializer(serializers.ModelSerializer):
    print("starting")
    password2=serializers.CharField(style={'input_type':'password'},write_only=True)
    print("password2:",password2)
    class Meta:
        model=Account
        print("model:",model)
        fields=['email','password','password2','username']
        extra_kwargs={
            'password':{'write_only':True}
             
        }
        
    def save(self):
        print("save function")
        account=Account(
            email=self.validated_data['email'],
            username=self.validated_data['username']
        )
        print("account:",account)
        password=self.validated_data['password']
        password2=self.validated_data['password2']
        print("password and password2:",password,password2)
        if password!=password2:
            raise serializers.ValidationError({'password':'passwords must match.'})
        account.set_password(password)
        print("account after set_password",account)
        account.save()
        print("after save func",account)
        return account
