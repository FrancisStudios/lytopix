# 🈵 Language Documentation

The lytopix engine can interpret a custom scripting language called the lytocode. 

You have to create your program (your ROM as it's referred in the source code) into the designated folder (_see README.md for details_) which must be called `program.lytopix`

## 🎨 Language features

### 0) 🖊️ Semantics

- Every statement (line) ends to a semicolon `;`

- Labels are signed with two angled brackets `[]`


### 1) 🏷️ Labels and `goto`

Labels are very essential tools of procedural programming. _If you are familiar with old-style procedural languages like BASIC you might be familiar with the concept already_

With labels you can skip / return to different routines in your code. This way you can create areas where your code only runs if some condition is fulfilled. You can jump between labels with the `goto` **command**.

Labels are signed with two angled brackets. Every label is a statement in itself so you must terminate it with a semicolon! `[label];`

Labels can not contain special characters, emojis, whitespaces, solely alphanumerical values and underscore/hyphen. `[label-1];` or `[label_1];`


Labels are so important in `lytocode` that your code **won't even run without them** you must tell the interpreter where your code starts with the **start label** and tell where it ends with the **end label**. 

```
[start];

[end];
```

**Labels can only occure (can only be declared!) once in your code otherwise compilation will halt with label ambiguitiy error**

For example

```
[start];
var my_variable 10;

[my_label];
add my_variable 20;

[my_label];
add my_variable 4;

goto my_label;

log my_variable;

[end];

```
This will result in a label ambiguity because `[my_label];` is declared twice. If you change your code a bit:

```
[start];
var my_variable 10;

[add_twenty];
add my_variable 20;

[add_four];
add my_variable 4;

goto add_twenty;
goto add_four;

log my_variable;

[end];

```

`my_varialbe` will be logged (the value 34) onto the debug screen.

As you see from the examples above, the `goto <label_name>;` statement will allow you to jump back and forth between labels / areas of your code. You can create loops, subroutines, and many more. 

### 2) 📦 Variables / Data Types

#### 1) Base types

Base types are considered `numbers`, `strings`, `booleans` in lytocode. You can declare each one of them with the following statement

`var` `variable_name` `value` `;`

The var keyword will tell the interpreter that a variable declaration will come and you will assign an initial value to your variable. The initial value will determine the variable type. 

````
var number_variable 0;
var string_variable Hello world;
var bool_variable true;
````
Once you assign an initial value to a variable, and the type is set then you can not assign other types to that variable. From the previous example we have the variable called `number_variable` if we would try to move a text into the variable, it will not accept it, and the interpreter will let you know that **type mismatch** has happened

``mov number_variable text;`` will cause an error because you can not load text to a number type.

but ``mov number_variable 42;`` will write the value 42 into the number_variable

#### Numbers

Number type variables can accept integers (signed and unsigned) as well as floating point values. Keep in mind javascripts weird behaviors when it comes to floating point calculations!

Examples:

- -6453 `is ok`
- 5435 `is ok`
- 10.435 `is ok`
- 0b0010 `not handled`
- 0x0a31 `not handled`

#### Strings

Strings can also leverage the `add` and `rem` commands (just like number variables can).

```
[start];
var my_variable text;
add my_variable _append;
log my_variable;
[end];
```

The result of the code above will log `text_append` to the console hence it appended a string with the `add` command. 

The `rem` (remove/subtract) command woks as shown below:
```
[start];
var my_variable text;
rem my_variable 2;
log my_variable;
[end];
```
Thre result of the code above will log `te` as the remove command will eliminate the two last characters of `text`

#### Booleans

### 3) 🗣️ Commands

### 4) 📜 Definitions

### 5) ↕️ Control flow