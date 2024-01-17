#include <stdio.h>

int main(void)
{
    int n = 0;
    scanf("%d", &n);

    int *numArr;
    numArr = (int *)malloc(sizeof(int) * n);

    for (int i = 0; i < n; i++)
    {
        scanf("%d", numArr + i);
    }

    for (int i = 0; i < n; i++)
    {
        printf("%d", *numArr + 1);
    }
    return 0;
}