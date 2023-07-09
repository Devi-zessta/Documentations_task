from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator
from django.core.exceptions import ValidationError
# Create your models here.
class Branch(models.Model):
    name = models.CharField(max_length=200,null=False)
    address = models.TextField(null=False)
    ifsc_code = models.CharField(max_length=200,null=False)
    contact_no = models.CharField(max_length=10,null=False)

    def __str__(self):
         return self.name

class TransactionHistory(models.Model):
    transaction_type = models.CharField(max_length=50, blank=False, default='Credit',choices=[('Credit', 'Credit'),('Debit','Debit')])
    amount = models.IntegerField(null=False, blank=False)

    def __str__(self):
        return self.transaction_type


class UserBankdetails(models.Model):
    name = models.ForeignKey(User,on_delete=models.CASCADE,blank=False,null=False,related_name="user_bankdetails")
    #bank_name = models.CharField(max_length=199,null=False)
    branch = models.ForeignKey(Branch,on_delete=models.CASCADE,blank=False,null=False,related_name="user_branch")
    account_type = models.CharField(max_length=50, blank=False, default='Savings',choices=[('Savings','Savings'),( 'Current','Current')])
    account_no = models.CharField(max_length=14,null=False,blank=False,unique=True)
    balance_amount = models.IntegerField(null=False, validators=[MaxValueValidator(100000),MinValueValidator(1)])
    transaction_history = models.ForeignKey(TransactionHistory,on_delete=models.CASCADE,null=True,blank=True)

    def clean(self):
        acc = self.account_no
        if(len(acc) !=14 and acc.isalnum()):
            raise ValidationError("Account no should be 14 digit and integer only")
        return acc

    def __str__(self):
        print(self.name)
        return self.name.username

