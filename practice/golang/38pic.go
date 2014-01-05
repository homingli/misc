package main

import "code.google.com/p/go-tour/pic"

func Pic(dx, dy int) [][]uint8 {
    p := make([][]uint8, dy)
    for i := range p {
        p[i] = make([]uint8, dx)
        for j := range p[i] {
            p[i][j] = uint8(i ^ j)
            //p[i][j] = uint8((i+j)/2)
            //p[i][j] = uint8(i*j)
        }
    }
    return p
}

func main() {
    pic.Show(Pic)
}

