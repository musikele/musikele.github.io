---
paginate: true
comments: true
author: musikele
category: Italiano
layout: post
date: 2020-12-02
title: Customizing Django Admin
description: 'some notes I wrote regarding Django Admin customization. '
header-img: ''
tags:
- django
- django admin
- python

---
Django Admin is probably the "killer app" of Django Framework. 

Having such an Admin panel allows to easily check, modify, edit data in the database expecially in the startup phase of the project, instead of going directly on the database. 

(I've seen a similar thing for laravel called Backpack - very similar approach. Check that out!)

In this article I'll share some notes of what I learned during my trip of customizing Django Admin. Do not expect holy grails or insider's tricks. 

## How to enable the Django Admin 

TODO. 

## How to add models to Django Admin 

The easiest way is to add this line to the model: 

```python
admin.site.register(Question)
```

This will create a basic CRUD page for the model. Many decisions will be taken by the framework itself, like the order of fields and much more. 

If you want to have more control over the pages, you should create another file (`admin.py`) and another model (`QuestionAdmin`) that will extend `admin.ModelAdmin`. Here's an example from the django docs: 

```python
from django.contrib import admin

from .models import Question


class QuestionAdmin(admin.ModelAdmin):
    fields = ['pub_date', 'question_text']

admin.site.register(Question, QuestionAdmin)
```

## How to order fields differently 

With the property `fields` you can specify the order of your fields. Useful when there are more than 2 fields, obviously. 

If you want to add sections to group fields together, `fieldsets` is the property to use:

```python
fieldsets = [
        (None,               {'fields': ['question_text']}),
        ('Date information', {'fields': ['pub_date']}),
    ] 
```

This will create a section "Date Information" that will contain the pub_date. 

## Add more models in the same page

There are many ways to put other related entities on the same page with a "parent" or "related" entity. 

Suppose we are modeling a `Question` object and a couple of `Choice` objects. First, in the parent model we're going to define an `inlines` property: 

```python
inlines = [ChoiceInline]
```

Then we're going to define how the `ChoiceInline` model should behave, depending on the class it is extending. 

### admin.stackedInline

```python
class ChoiceInline(admin.StackedInline):
    model = Choice
    extra = 3
```

In this case, all the properties by `Choice` will be displayed as stacked one over the others. 

`extra` tells Admin how many entities should be displayed by default. 

### admin.TabularInline

by extending this class, the Choices are rendered as rows, with all fields on one row. 