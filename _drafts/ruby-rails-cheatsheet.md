---
paginate: true
comments: true
author: musikele
title: Ruby on Rails cheatsheet
category: Italiano
layout: post
date: '2017-05-11 13:10:00'
tags:
- ruby
- rails
- howto
---

## Introduction to Ruby 

Ruby resource: [www.ruby-lang.org](www.ruby-lang.org)

To view current directory:

```
pwd
```

To create a directory:

```
mkdir directoryname
```

To move into a directory:

```
cd directoryname
```

> This will only work if the directoryname is listed as one of the folders within the current directory

To list all directories and files within current directory:

```console
ls
``` 

To list all directories and files within current directory including hidden files:

```console 
ls -a
```
To move out of a directory (1 level up the tree):

```console
cd ..
``` 

helloworld.rb contents:

```ruby
puts "Hello World!"
``` 

To run `helloworld.rb` from the command line:

```ruby
ruby helloworld.rb
``` 

To create a variable called hello and print the value of hello:
```ruby 
hello = "Hello World!"
puts hello
``` 

The following is a method:
```ruby
def methodname
	#contents of method
end
```

Content of `helloworldmethod.rb`

```ruby
def hello
	puts "Hello World!"
end
```

Then call the method by simply naming it:

```ruby
hello
```

Updated hello method:

```ruby
def hello(anything)
	puts anything
end
```

To call this method:

```ruby
hello "My name is mashrur"
hello "Welcome to the complete ruby on rails developer course"
hello "Check it out this prints anything I want"
```

## Working with strings 

To start irb console:

```console
$ irb
```

String concat structure:

```ruby
String1 + String2
String1 + " " + String2 + String3
```

To find out what class the object belongs to:

```ruby
variable_name.class
```

### class

To find out methods available to an object:

```ruby
objectname.methods
```

Some methods that can be used on objects:

```ruby
objectname.nil?
objectname.empty?
objectname.length
objectname.reverse
```

String interpolation (remember has to be within double quotes):

```ruby
name = "Mashrur"
"My name is #{name}"
```

This will print out the value of name in the line "My name is....". 

To escape the evaluation of `#{variablename}` within a String, prepent with a `\`:

```ruby
\#{variablename}
```

To get input from the command line use the following method:

```ruby
gets.chomp
```

To assign the input to a variable so it can be referenced later on:

```ruby
variablename = gets.chomp
```

## Working with numbers 

To add and display the value of `1 + 2`:

```ruby
puts 1 + 2
```

Different operations:

```ruby
1 + 2
1 * 2
1 / 2
1 - 2
1 % 2
```

To indicate a number is a float instead of an integer include a `.` in the number:

`20` is an integer, `20.0` is a float

or

```ruby
20.to_f
```

Methods you can use:

```ruby
object.odd?
22.odd?
object.even?
22.even?
```

Comparisons:

```ruby
a == b
1 == 2
3 == 3
5 < 2
2 <= 5
5 > 2
5 && 6
5 || 6
```

Generate a random number between `0` and less than `10`:

```ruby
rand(10)
```

To convert an string object to integer:

```ruby
objectname.to_i
"5".to_i
```

To convert an object to string:

```ruby
objectname.to_s
5.to_s
```

## Methods and branching 

Structure of an `if` condition:

```ruby
if #condition
	#execute logic
end

#variant
if #condition
	#execute logic
else
	#execute different logic
end

#variant
if #condition
	#execute logic
elsif #different condition
	#execute logic 2
else
	#execute logic 3
end
```

Code worked on:

```ruby
def multiply(first_number, second_number)
	first_number.to_f * second_number.to_f
end

def divide(first_number, second_number)
	first_number.to_f / second_number.to_f
end

def subtract(first_number, second_number)
	second_number.to_f - first_number.to_f
end

def mod(first_number, second_number)
	first_number.to_f % second_number.to_f
end

puts "What do you want to do? 1) multiply 2) divide 3) subtract 4) find remainder"
prompt = gets.chomp

puts "Enter in your first number"
first_number = gets.chomp

puts "Enter in your second number"
second_number = gets.chomp

if prompt == '1'

puts "You have chosen to multiply #{first_number} with #{second_number}"
result = multiply(first_number, second_number)

elsif prompt == '2'
puts "You have chosen to divide"

result = divide(first_number, second_number)
elsif prompt == '3'

puts "You have chosen to subtract"
result = subtract(first_number, second_number)

elsif prompt == '4'
puts "You have chosen to find the remainder"

result = mod(first_number, second_number)
else

puts "You have made an invalid choice"
end

puts "The result is #{result}"
```

## Arrays and Iterators 

Array, created by including elements within square brackets:

```ruby
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

The index for an array starts with 0, so in the array above `a[0]` is `1`

Some methods you can use on arrays:

```ruby
arrayname.empty?
arrayname.include?(itemname)
arrayname.reverse
arrayname.reverse! # use ! at the end to change the original array
arrayname.shuffle
arrayname.push(30) # will append new element 30 to the end array
arrayname << 25 # << known as shovel operator will also append new element to the end of the array
arrayname.unshift("someelement") # will add element "some element" to the beginning of the array
arrayname.pop # will remove the last element of the array and return 1
arrayname.uniq # will remove all the duplicates and display (will not change the original array)
arrayname.uniq! # will remove all the duplicates in the original array
```

A range:

```ruby
(0..25).to_a
```

will create an array with elements from value 0 to 25. 

```ruby
(0..99).to_a.shuffle!
```

will create an array with elements from value 0 to 99 in random order. 

To loop through an array named y using the .each method and print out the value of each element:

```ruby
y.each { |i| puts i }
```

In plain terms: For each element `i` in array `y` print the value of `i`

To execute iteration through an array called names using a block:

```ruby
names.each do |random_variable_name| # starts the do block
	puts "Hello #{random_variable_name}" # executes code for each element
end # ends the do block
```

To capitalize (or use another method) on each element of array called names:

```ruby
names.each { |randomvariablename| puts "Hello #{randomvariablename.capitalize}" }
```

Using the select method to pickup all the odd numbers from an array `y`:

```ruby
y.select { |number| number.odd? } # selects the value and returns it only if the condition is met
```

To join the elements of an array named p:

```ruby
p.join
```

To join the elements of an array with space in between each element:

```ruby
p.join(" ")
```

To join the elements of an array with dash in between each element:

```ruby
p.join("-")
```

## Hashes
To create a hash called `my_details` include the elements within `{ }`:

```ruby
my_details = {'name' => 'mashrur', 'favcolor' => 'red'}
```

To access the value and notify me what favcolor is:

```ruby
my_details["favcolor"]
```

Alternate syntax to create key, value pairs in hash:

```ruby
myhash = {a: 1, b: 2, c: 3, d: 4}
```

To access the value for key `c` above:

```ruby
myhash[:c]
```

To add a key, value pair to the hash above:

```ruby
myhash[:d] = 7
myhash[:name] = "Mashrur"
```

To delete a key,value pair simply delete the key:

```ruby
myhash.delete(:d)
```

To iterate through a hash using `.each` method and print out value:

```ruby
myhash.each { |somekey, somevalue| puts somevalue }
```

To iterate through a hash using `.each` method and print out both key and value in friendly format:

```ruby
myhash.each { |somekey, somevalue| puts "The key is #{somekey} and the value is #{somevalue}" }
```

To iterate through and delete a items from a hash based on a condition (in the condition below if the value is greater than 3):

```ruby
myhash.each { |k, v| myhash.delete(k) if v > 3 }
```

Use `select` method to display items only if value of the item is odd

```ruby
myhash.select { |k, v| v.odd? }
```

## Styleguide

Link for style guide: [github.com/bbatsov/ruby-style-guide](github.com/bbatsov/ruby-style-guide)

- Soft tabs: 2 spaces, convert tabs to spaces
- class names: `CamelCase`

```
ThisIsCamelCase
```

- file names: `snake_case`

```
this_is_snake_case.rb
```

Create and assign a variable with a long name like this: 
```ruby
my_new_variable = "Create long named variables like this"
```

## Area code dictionary exercise - solution

```ruby
dial_book = {
	"newyork" => "212",
	"newbrunswick" => "732",
	"edison" => "908",
	"plainsboro" => "609",
	"sanfrancisco" => "301"
}

def get_city_names(somehash)
	somehash.each { |k, v| puts k }
end

def get_area_code(somehash, key)
	somehash[key]
end

loop do
	puts "Do you want to lookup an area code based on a city name?(Y/N)"
	answer = gets.chomp

	if answer != "Y"
		break
	end

	puts "Which city do you want the area code for?"
	get_city_names(dial_book)

	puts "Enter your selection"
	prompt = gets.chomp
	if dial_book.include?(prompt)
		puts "The area code for #{prompt} is #{get_area_code(dial_book, prompt)}"
	else
		puts "You entered a city name not in the dictionary"
	end

end
```

## Object Oriented programming 

Object-oriented programming (OOP) is a programming paradigm that uses objects and their interactions to design and program applications, and allows the program to block off areas of code that perform certain tasks independently of other areas in the application.

- **Encapsulation** - concept of blocking off areas of code and not making it available to the rest of the program
- **Abstraction** - is simplifying a complex process of a program, an enterprise software solution for example by modeling classes appropriate for it
- **Inheritance** - is used where a class inherits the behavior of another class, referred to as the superclass
- **Polymorphism** - is when a class inherits the behaviors of another class, but has the ability to not inherit everything and change some of it’s inherited behaviors. For example to write a method that does something differently from the inherited method
**Classes** - It is a blueprint that describes the state and behavior that the objects of the class all share. A class can be used to create many objects. Objects created at runtime from a class are called instances of that particular class.

Example of a user class: 

```ruby
class User
	
	attr_accessor :name, :email
	
	def initialize(name, email)
		@name = name
		@email = email
	end

	def run
		puts "Hey I'm running"
	end

	def self.identify_yourself
		puts "Hey I am a class method"
	end

end

user = User.new("mashrur", "mashrur@example.com")
user.run

User.identify_youself # to run this class method you don't need 
# an instance of user you can directly call the class User
```

## Inheritance and Modules 

user class with destructable module:

```ruby
module Destructable
	def destroy(anyobject)
		puts "I will destroy the object"
	end
end

class User include Destructable
	attr_accessor :name, :email
	def initialize(name, email)
		@name = name
		@email = email
	end

	def run
		puts "Hey I'm running"
	end

	def self.identify_yourself
		puts "Hey I am a class method"
	end
end

class Buyer < User
	
	def run
		puts "Hey I'm not running and I'm in buyer class"
	end
end

class Seller < User end

class Admin < User end
```

## JSON 

user_permissions_template.json:

```json
{
	"accounts": "read",
	"policies": "write",
	"users": "write"
}
```

user.rb:

```ruby
require 'json'

class User
	attr_accessor :email, :name, :permissions
	
	def initialize(*args)
		@email = args[0]
		@name = args[1]
		@permissions = User.permissions_from_template
	end

	def self.permissions_from_template
		file = File.read 'user_permissions_template.json'
		JSON.load(file, nil, symbolize_names: true)
	end

	def save
		self_json = {email: @email, name: @name, permissions: @permissions}.to_json
		open('users.json', 'a') do |file|
			file.puts self_json
		end
	end
end
```

runner.rb:

```ruby
require 'pp'
require_relative 'user'

user = User.new 'joe@example.com', 'joe'

pp user

user.save
```

## Ruby on Rails 

Rails overview: 
- [guides.rubyonrails.org](guides.rubyonrails.org)
- [rubyonrails.org](rubyonrails.org)
- [weblog.rubyonrails.org](weblog.rubyonrails.org)

Creator of Rails: [David Heinemeier Hansson](david.heinemeierhansson.com)

Ruby meetups: [ruby.meetup.com](ruby.meetup.com)

Code repository: [github.com](github.com)

Devise gem code repository: [github.com/plataformatec/devise](github.com/plataformatec/devise)

Gems for ruby and ruby on rails: [rubygems.org](rubygems.org)

Bootstrap gem code repository: [github.com/twbs/bootstrap-sass](github.com/twbs/bootstrap-sass)

## Model View Controller 

To create a new directory called rails_projects:

```
mkdir rails_projects
```

To start a new rails application called test_app:

```
rails new test_app
```

MVC - Model, View, Controller

General flow of Rails application:

- Request made at browser
- Request received at router of rails application
- Request routed to appropriate controller
- Controller either renders a view template or communicates with model
- Model communicates with database
- Model sends back information to controller
- Controller renders view

## Root Route 

To set root route to pages controller home:

Navigate to `config/routes.rb` file and enter in the following code: 

```
root 'pages#home'
```

The reference to the root path within the application code would be root_path

## CRUD and Scaffold 


Scaffold generator command to create `Article` model, articles controller, views for articles and migration file to create articles table:

```
rails generate scaffold Article title:string description:text
```

Command to see routes present for your app:

```
rake routes
```

The line resources `:articles` in the `config/routes.rb` file provides the following routes:

- index of articles (listing)
- new article
- create article
- edit article
- update article (put and patch)
- show article
- delete article

From UI perspective: 
- index lists all the articles in the db of the app
- new article deals with the form to enter in new article details
- create handles the submission of the items in the new article form
- edit article deals with the form to enter in edit details for an existing article
- update article deals with the submission of the edited details
- show article displays an individual article based on selection
- delete article deletes an article from the db

## Models, Migrations and Rails console

Model name: Article, class: `Article` -> Capitalized A and singular

File name: `article.rb` -> singular and all lowercase

Controller file name: `articles_controller.rb`, class: `ArticlesController` -> camel case class name, snake case file name both plural

Views folder: `articles`

Table name: `articles` -> plural of model

Model name: User, class: `User` -> Capitalized U and singular

File name: `user.rb` -> singular and all lowercase

Controller file name: `users_controller.rb`, class: `UsersController` -> camel case class name, snake case file name both plural

Views folder: `users`

Table name: `users` -> plural of model

To generate a migration to create a table (in this example articles):

```
rails generate migration create_articles
```

To add attributes for the table in the migration file, add the following inside create_table block:

```ruby
t.string :title
t.text :description
t.timestamps
```

To run the migration file and create the articles table:

```
rake db:migrate
```

OR

```
bundle exec rake db:migrate
```

To rollback a migration (undo the last migration):

```
rake db:rollback
```

To add a column (example: `created_at` column) to the articles table:

```
rails generate migration add_created_at_to_articles
```

Then within the def change method in the migration file:

```
add_column :articles, :created_at, :datetime
```

To add a different column (example: `name`) to a users table:

```
rails generate migration add_name_to_users
```

Then within the def change method in the migration file:

```
add_column :users, :name, :string
```

In the above two adding column methods, the first argument is the name of the table, second is the attribute name and third is the type

To create a model file for Article:

- In the app/models folder create a file called `article.rb`
- Fill it in with the following ->

```ruby
class Article < ActiveRecord::Base end
```

To start the rails console:

```
rails console
```

To test connection to the articles table:

```ruby
Article.all # classname.all will list all the articles in the articles table
```

Then simply type in Article (classname) to view the attributes

To create a new article with attributes title and description:

```ruby
article = Article.new(title: "This is a test title", description: "This is a test description")
article.save
```

OR

```ruby
article = Article.new
article.title = "This is a test title"
article.description = "This is a test description"
article.save
```

## Edit, Delete and Validations 

To find an article with id 2 and edit it's title:

```ruby
article = Article.find(2) # Here assumption is article with id of 2 was being looked for
article.title = "This is an edited title"
article.save
```

To delete an article, example with id 5:

```ruby
article = Article.find(5)
article.destroy
```

To add validations presence and length validations to article model for title and description:

```ruby
class Article < ActiveRecord::Base
	validates :title, presence: true, length: {minimum: 3, maximum: 50}
	validates :description, presence: true, length: {minimum: 10, maximum: 300}
end
```

To find errors in article object while saving (if it's rolled back):

```ruby
article.errors.any?
article.errors.full_messages
```

## Create new Articles from UI 

In the `config/routes.rb` file add the following line to add all the routes for articles:

```ruby
resources :articles
```

This will add the following routes:

| routes | path | HTTP verb | link | controller#action | 
| ------ | ---- | --------- | ---- | ----------------- |
| articles | index | articles | GET | /articles | articles#index |
| new article | new_article | GET | /articles/new | articles#new |
| create article | POST | /articles | articles#create |
| edit | article | edit_article | GET | /articles/:id | articles#edit |
| update | article | PATCH | /articles/:id | articles#update |
| show | article | article | GET | /articles/:id | articles#show |
| delete | article | DELETE | /articles/:id | articles#destroy |

To create articles controller with a new action, under `app/controllers` create a file named `articles_controller.rb` (snake case):

```ruby
class ArticlesController < ApplicationController
	
	def new
		@article = Article.new
	end
end
```

To create a view, under `app/views` create a folder named `articles` and within it create a file named `new.html.erb` then fill in the following:

```
<h1>Create an article</h1>

<%= form_for @article do |f| %>
	<p>
		<%= f.label :title %><br/>
		<%= f.text_field :title %>
	</p>
	<p>
		<%= f.label :description %><br/>
		<%= f.text_area :description %>
	</p>
	<p>
		<%= f.submit %>
	</p>
<% end %>
```

Create action and private `article_params` method for string parameters in the articles controller (Note: This is not complete):

```ruby
def create
	@article = Article.new(article_params)
	@article.save
	redirect_to article_path(@article)
end

private
def article_params
	params.require(:article).permit(:title, :description)
end
```