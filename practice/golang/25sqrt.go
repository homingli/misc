package main

import (
    "fmt"
    "math"
)

func Sqrt(x float64) (float64, int) {
    z := x / 2.0
    z2 := z
    c := 0
    for {
        c++
        z2 = z - (z*z-x)/2/z
        if math.Abs(z2 - z) < 0.000000000000001 {
            break
        } else {
            z = z2
        }
    }
    return z2, c
}

func main() {
    testnum := 2.0
    ans, counter := Sqrt(testnum)
    fmt.Println("answer: ", ans)
    fmt.Println("iterations: ", counter)
    fmt.Println("math lib answer: ", math.Sqrt(testnum))
}

