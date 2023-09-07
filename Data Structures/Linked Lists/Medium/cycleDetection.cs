// Note that there is a mistake in the main() method in JS, so solved in C# instead.

static bool hasCycle(SinglyLinkedListNode head)
{
    if (head == null)
    {
        return false;
    }
    var p = head;
    bool result = false;
    SinglyLinkedListNode temp = new SinglyLinkedListNode(0);

    while (p != null)
    {
        if (p == temp)
        {
            result = true;
            break;
        }
        var t = p;
        p = p.next;
        t.next = temp;
    }
    return result;

}