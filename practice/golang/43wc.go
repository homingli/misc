package main

import (
    "code.google.com/p/go-tour/wc"
    "strings"
)

func WordCount(s string) map[string]int {
  
    w := strings.Fields(s)
    res := make(map[string]int,len(w))
    for i := range w {
        res[w[i]]++;
    }
    return res
}

func main() {
    wc.Test(WordCount)
}
