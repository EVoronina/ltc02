#include "stdio.h"
#include "stdlib.h"

int reverse_sorter(const void *first_arg, const void *second_arg) {
    int* first = (int*) first_arg;
    int* second = (int*) second_arg;

    if (*first< *second) {
        return 1;
    }
    if (*first> *second) {
        return -1;
    }
    if (*first == *second) {
        return 0;
    }

}
int main () {

    int array[10] = {3, 5, 1, 7, 2, 7, 6, 0, 8, 4};
    
    qsort(array, 10, sizeof(int), reverse_sorter);

    int i;
    for (i=0; i<10; i++){
        printf("%d, ", array[i]);
    }

}
