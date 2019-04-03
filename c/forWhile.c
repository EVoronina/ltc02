#include "stdio.h"

int main () {
    int arr[8] = {1,1,2,3,5,8,13,21};
    size_t arrlength = sizeof(arr)/sizeof(int);

    int i = 0;
    int sum = 0;
    int product = 1;

    while (i<arrlength) {
        sum = sum + arr[i];
        i = i + 1;
    }

    for (i = 0; i<arrlength; i = i+2) {
        product = product*arr[i];
    }

    printf("Sum elements of array = %d\n", sum);
    printf("product elements of array = %d\n", product);

}