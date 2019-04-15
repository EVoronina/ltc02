#include "stdio.h"
#include "stdlib.h"

void multiply (int *a) {
    *a *= 2;
}

int main (){
    int a = 42;
    printf("%d\n", a);

    multiply(&a);
    
    printf("%d\n", a);
}