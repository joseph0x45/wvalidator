## This list will be updated as we add new validators

| Rules | Meaning  | Child rules  |
|---|---|---|
| 1up  | Has to contain at least one uppercase character  |   |
| alpha  | Has to contain alphabetical values only  |   |
| num  | Has to contain numerical values only  |   |
|len| Is used to fix the content length| wmin & wmax |

## Examples
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="module" >https://cdn.jsdelivr.net/gh/TheWisePigeon/validator/lib/index.js</script>
</head>
<body>
    
    <form action="">
        <input type="text" id="username"  wv="alpha"><br> <!--Must contain alphabetical values only   -->

        <input type="text" id="username"  wv="num"><br> <!--Must contain numeric values only -->

        <input type="text" id="username"  wv="1up"><br> <!--Must contain at least one uppercase character-->

        <input type="text" id="username"  wv="alpha 1up"><br> <!--Must contain at least one uppercase character and only alphabetic characters-->

        <input type="text" id="username" wmin="5"   wv="len"><br> <!--Must be at least 5 characters long-->

        <input type="text" id="username" wmax="5" wv="len"><br> <!--Must not exceed 5 characters long-->

        <input type="text" id="username" wmax="10" wmin="5"  wv="len"><br> <!--Must not exceed 10 characters long and must be at least 5 characters -->

        <input type="text" id="username" wmax="15"  wv="alpha 1up len"><br> <!--Must contain only alphabetic characters, 
            contain at least one uppercase character and not exceed 15 characters-->
    </form>

</body>
</html>
```

`Child routes` are routes that are used by another rule. The `len` rule, is used to control the length of the field's value, it required you to set `wmin` and `wmax` attributes.
`wmin` is the minimun length and `wmax` the maximum length.

