/// Cham Lee
/// Date : 2024.01.02
/// BOJ 2751 PS
/// Data Structure : General List(doubly linked list and Ordered list) Recap

#include <stdio.h>

typedef struct node
{
    int data;
    struct node *llink;
    struct node *rlink;
} NODE;

typedef struct
{
    int count;
    NODE *head;
    NODE *rear;
} LIST;

/// prototype declarations
LIST *createList(void);
LIST *destroyList(LIST *pList);
int addNode(LIST *pList, int *dataInPtr);
int removeNode(LIST *pList, int *keyPtr, int **dataOutPtr);
int searchList(LIST *pList, int *pArgu, int **dataOutPtr);
static int _search(LIST *pList, NODE **pPre, NODE **pLoc, int *pArgu);

void increase_freq(int *dataOutPtr, const int *dataInPtr);

LIST *createList(void)
{
    LIST *pList = (LIST *)malloc(sizeof(LIST));
}

int main(void)
{
    return 0;
}