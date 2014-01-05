package main

import (
    "fmt"
    "math"
)

func Cbrt(x complex128) complex128 {
    z := 1+0i
    for i := 0; i < 50; i++ {
        z = z - (z*z*z-x)/3/z/z
    }
    return z
}

func main() {
    fmt.Println(Cbrt(2))
    fmt.Println(math.Pow(2,1.0/3.0))
}

