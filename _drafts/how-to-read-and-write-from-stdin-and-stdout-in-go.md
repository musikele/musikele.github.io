---
paginate: true
comments: true
author: musikele
category: English
layout: post
date: 2020-09-16
title: How to read and write from STDIN and STDOUT in GO
description: 'Using the Go programming language, i''ll explain some basic features
  of the language with this simple Hello World program. '
header-img: ''
tags:
- go

---
At my current job we have some projects that were realized using the Go programming language. The cool thing is, programmers that have used it are in love with it, and these applications never crash, not even under heavy load. This is great, for example, for applications that have to process a stream of data as fast as possible.

So, I decided to go through HackerRank and do the 30 days challenge, this time trying to solve all issues with the go programming language. I do not expect to become a True Expert© but, at least, I'd like to catch up with the syntax and all the rest.

(Probably, in the long run, we're going to sunset these Go projects because we got acquired by another company, and their main programming language is Java, sooooo....)

Anyway, let's go with a very simple program for today. I will not go through installing the go compiler, _Go figure out_ by yourself. But this hello world may give you (and me) a sense of what's going on here.

## Things you should know before we write some code

Go is a compiled programming language. This means that, to run your program, you first need to compile it using the `go` executable.

Go source files have the `.go` extension. So, to compile a file:

```shell
$ go build hello-world.go 
$ ls 
hello-world hello-world.go 
```

Go compiler will create a `hello-world` executable that we can lunch, on linux and mac systems, by running `./hello-world` .

Some may say that it's boring to compile & launch so Go offers the `run` mode, that will execute the two steps for you:

```console
$ go run hello-world.go 
.... (program output here) 
```

And finally: go has an official formatting tool. This means that you cannot decide how many spaces (or tabs), or how long your lines should be, etc. Smart IDEs like Visual Studio Code with the Go extension will automagically run the formatting tool for you at every save. But if you want to run it from the command line:

```console
$ go fmt hello-world.go 
```

No more issues on git merge :)

## Let's go back to the source code

The exercise is very easy:

> save a line of input from stdin to a variable, print `Hello, World.` on a single line, and finally print the value of your variable on a second line.

Here's my source code:

```go
package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	var reader = bufio.NewReader(os.Stdin)
	message, _ := reader.ReadString('\n')

	fmt.Println("Hello, World.")
	fmt.Println(message)
}
```

Let's break up and analyse the code in parts.

### the package declaration

```go
package main
```

All go code must declare its package. Executable files must be in a `main` package, and the first function that is executed on the first run is the `main` function. (This reminds me of Java)

### Import block

```go
import (
	"bufio"
	"fmt"
	"os"
)
```

Here, we are importing three packages from the go standard library:

* `fmt` is the [formatted I/O library](https://golang.org/pkg/fmt/) and contains functions to read and write from I/O like printf and scanf in C.
* `bufio` is the package that will perform [buffered i/o operations](https://golang.org/pkg/bufio/). basically, we want to read a bunch of characters at a time, and this is the package that contains the easiest functions.
* `os` provides a [platform-independent interface](https://golang.org/pkg/os/) to operating system functionality.

I must be honest with you, in my first attempt to write this block, I wrote:

```go
import "fmt"
import "bufio"
import "os"
```

This is legal syntax, but the go formatter decided that wrapping all packages inside a single `import` declaration was better. If the formatter goes with the other syntax, it's probably better to use it from the start.

### function declarations

```go
func main() {
  ...
}
```

Another piece of syntax from go: to declare functions we write `func` followed by the function name. If the file must be executable, the function must be called `main()` and be in the `main` package.

You may ask, "what is the syntax if I want to pass arguments? and return values?" Ok, here's a slightly more complex example:

```go
func addMult(a,b int)(int, int) {
   return a+b, a*b
}
```

wtf? well, this means that this function accepts two parameters in input (`a` and `b`) and will return **two** values, that you can assign. We'll see an example in the next block.

### Read input from STDIN

```go
var reader = bufio.NewReader(os.Stdin)
message, _ := reader.ReadString('\n')
```

Here we are declaring `reader` variable with `var` and `message` variable without `var`. Why?

To only declare a variable, without initializing, you can user the keyword `var` followed by the variable name; you must also declare a type.

If the type can be inferred by the assigning expression, it can be omitted.

If the variable is initialized and assigned, Go offers the shorthand syntax via `:=` that allows to avoid the `var` keyword. So the first line may be written as: 

```go
reader := bufio.NewReader(os.Stdin)
```

As I spercified before, the `bufio` library contains functions that allow to read in a buffer. The buffer we are just creating is 

More resources:

* [how to install go for your OS](https://golang.org/doc/install) (golang.org)
* many [other ways to read input in Go](http://zetcode.com/golang/readinput/) (from zetcode.com)
* [difference of quotes in Go](https://golangbyexample.com/double-single-back-quotes-go/) (from golangbyexample.com)
* [anatomy of functions in go](https://medium.com/rungo/the-anatomy-of-functions-in-go-de56c050fe11) (by runGo)
* [Go by example: variables](https://gobyexample.com/variables)