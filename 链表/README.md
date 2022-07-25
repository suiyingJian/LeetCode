原型链简介
原型链本质是链表
原型链上的节点是各种原型对象，比如：Function.prototype  、Object.prototype 、Array.prototype
所谓原型对象就是指类的prototype属性值
原型链通过__ proto __属性连接各种原型对象

对于一个对象来说 它的原型链： obj -> Object.prototype -> null
对于一个函数来说 它的原型链： func -> Function.prototype  -> Object.prototype -> null
对于一个数组来说 它的原型链： arr -> Array.prototype  -> Object.prototype -> null

如果A 沿着原型链能找到 B.prototype , 那么A instanceof B 为true
如果在A对象上没有找到x属性 ，那么就会沿着原型链找x属性。
实现instanceof


### 一、链表的概念
> 链表最重要的特点：链表里的元素不是连续的，之间通过next指针连接
> JavaScript中没有链表，但可以用Object模拟链表
链表常用操作：修改next 遍历链表
JS中的原型链也是一个链表
使用链表指针也可以获取JSON的节点值
（1）链表的结构
在计算机里，不保存在连续存储空间中，而每一个元素里都保存了到下一个元素的地址的数据结构，我们称之为链表（Linked List）。链表上的每一个元素又可以称它为节点（Node），而链表中第一个元素，称它为头节点（Head Node），最后一个元素称它为尾节点（Tail Node）。
链表的结构定义中，包含了两个信息，一个是数据信息，用来存储数据的，也叫做数据域；另外一个是地址信息，用来存储下一个节点地址的，也叫做指针域。

```
function ListNode(val) {
    this.val = val;
    this..next = null;
}
```
> 注意，链表结构的指针域只有一个 next 变量，这说明每一个链表节点，只能唯一地指向后续的一个节点。在JavaScript中是没有指针的概念的，所以我们可以理解这个指针是一个地址的引用。

（2）链表与数组对比
其实，链表结构和数组结构很类似，只不过数组结构在内存中存储是连续的，链表结构由于有指针域的存在，它的每一个节点在内存中存储的位置未必连续。下面来对比一下两者的性能。
1）空间利用率
数组在创建之后大小是无法改变的，想要增加元素的话就必须重新创建一个新的数组。所，以有时为了能够动态地增加元素，在开始创建数组时会声明一个比需要的大小还多的空间出来，以便后面添加新的元素。这个时候就会造成空间上的浪费，所以，数组的空间利用率相当于本来需要的大小除以创建出来数组的大小。
而因为链表中的元素只有当需要的时候才会被创建出来，所以不存在需要多预留空间的情况。对于我们来说，只有节点里的值是可以利用上的，而保存节点地址的内存其实对于我们来说是无法应用的。所以链表的空间利用率上相当于值的大小除以值的大小和节点地址大小的和。
2）时间复杂度
访问数组元素的时间复杂度是 O(1)。而因为链表顺序访问的这个特性，访问链表中第 N 个元素需要从第一个元素一直遍历到第 N 个元素，所以平均下来的时间复杂度是 O(N)。
对于数组来说，插入操作无论是发生在数组结尾还是发生在数组的中间，因为都需要重新创建一个新的数组出来，并复制一遍之前的元素到新的数组中，所以平均的时间复杂度都是 O(N)。而对于链表来说，要是一直都能维护一个尾节点的地址的话，那么插入一个新的元素只需要 O(1) 的时间复杂度。而当插入一个元素到链表中间的时候，因为链表顺序访问的这个特性，需要先遍历一遍链表，从第一个节点开始直到第 N 个位置，然后再进行插入，所以平均下来的时间复杂度是 O(N)。
（3）链表的形式
1）单向链表
所有的链表节点中都只保存了指向下一个节点地址的信息。这种在一个节点中既保存了数据，也保存了指向下一个节点地址信息的链表，称之为单向链表（Singly Linked List）。

2）双向链表
单向链表有着只能朝着一个方向遍历的局限性，既然可以保存指向下一个节点地址的信息，也可以保存指向上一个节点地址的信息。这种在一个节点中保存了数据也保存了连向下一个和上一个节点地址信息的链表，称之为双向链表（Doubly Linked List）。和链表中尾节点的下一个节点只保存空地址一样，链表中头节点的上一个节点地址也保存着空地址。

（3）循环链表 无论是单向链表或者是双向链表，当遍历至尾节点之后就无法再遍历下去了，如果将尾节点指向下一个节点地址的信息更新成指向头节点的话，这样整个链表就形成了一个环，这种链表称之为循环链表（Circular Linked List）。

### 二、链表的操作
在实现链表时候，通常在链表前面加一个假头，所谓假头，通常也叫作 Dummy Head 或者“哑头”。实际上，就是在链表前面，加上一个额外的结点。此时，存放了 N 个数据的带假头的链表，算上假头一共有 N+1 个结点。
> 那额外的结点不会存放有意义的数据。那么它的作用是什么呢？
其实，添加假头后，可以省略掉很多空指针的判断，链表的各种操作会变得更加简洁。关于链表的各种操作，主要是以下 6 种基本操作：

- 链表初始化
- 尾部追加结点
- 头部插入结点
- 查找结点
- 插入指定位置之前
- 删除结点

> 下面以 LeetCode 的707题《设计链表》为例，来实现一下单链表，题目要求将这 6 种基本的操作加以实现：注释中的 /code here/ 部分是填写相应的 6 种功能代码：

```
var MyLinkedList = function() {
   /* code here: 初始化链表 */
};

MyLinkedList.prototype.addAtTail = function(val) {
  /* code here: 将值为 val 的结点追加到链表尾部 */
};

MyLinkedList.prototype.addAtHead = function(val) {
  /* code here: 插入值val的新结点，使它成为链表的第一个结点 */
};

MyLinkedList.prototype.get = function(index) {
	/* code here: 获取链表中第index个结点的值。如果索引无效，则返回-1 */
  // index从0开始。
};
  
MyLinkedList.prototype.addAtIndex = function(index, val) {
	// code here:
  // 在链表中的第 index 个结点之前添加值为 val  的结点。
  // 1. 如果 index 等于链表的长度，则该结点将附加到链表的末尾。
  // 2. 如果 index 大于链表长度，则不会插入结点。
  // 3. 如果 index 小于0，则在头节点前插入
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
	/* code here: 如果索引index有效，则删除链表中的第index个结点 */
};
var MyLinkedList = function() {
   /* code here: 初始化链表 */
};

MyLinkedList.prototype.addAtTail = function(val) {
  /* code here: 将值为 val 的结点追加到链表尾部 */
};

MyLinkedList.prototype.addAtHead = function(val) {
  /* code here: 插入值val的新结点，使它成为链表的第一个结点 */
};

MyLinkedList.prototype.get = function(index) {
	/* code here: 获取链表中第index个结点的值。如果索引无效，则返回-1 */
  // index从0开始。
};
  
MyLinkedList.prototype.addAtIndex = function(index, val) {
	// code here:
  // 在链表中的第 index 个结点之前添加值为 val  的结点。
  // 1. 如果 index 等于链表的长度，则该结点将附加到链表的末尾。
  // 2. 如果 index 大于链表长度，则不会插入结点。
  // 3. 如果 index 小于0，则在头节点前插入
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
	/* code here: 如果索引index有效，则删除链表中的第index个结点 */
};

```

#### （1）链表初始化
初始化假头链表，首先需要 new 出一个链表结点，并且让链表的 dummy 和 tail 指针都指向它，代码如下：
```
var listNode = function(val) {
    this.val = val
    this.next = null
}

var MyLinkedList = function() {
    this.dummy = new listNode()
    this.tail = this.dummy
    this.length = 0
}
```
初始化完成后，链表已经有了一个结点，但是此时，整个链表中还没有任何数据。因此，对于一个空链表，就是指已经初始化好的带假头链表。
虽然 head 和 tail 初始化完成之后，都指向null。但是这两者有一个特点，叫“动静结合”：

静：head 指针初始化好以后，永远都是静止的，再也不会动了。
动：tail 指针在链表发生变动的时候，就需要移动调整。

#### （2）尾部追加结点
尾部添加新结点操作只有两步，代码如下：
```
MyLinkedList.prototype.addAtTail = function(val) {
    <!-- 尾部添加一个新结点 -->
    this.tail.next = new listNode(val)
    //移动tail指针
    this.tail = this.tail.next
    //链表长度+1
    this.length ++
}
```
带假头的链表初始化之后，可以保证 tail 指针永远非空，因此，也就可以直接去修改 tail.next 指针，省略掉了关于 tail 指针是否为空的判断。

#### （3）头部插入结点
需要插入的新结点为 p，插入之后，新结点 p 会成为第一个有意义的数据结点。通过以下 3 步可以完成头部插入：

新结点 p.next 指向 dummy.next；
dummy.next 指向 p；
如果原来的 tail 指向 dummy，那么将 tail 指向 p。

对应的代码如下：

```
MyLinkedList.prototype.addAtHead = function(val) {
    // 生成一个结点，存放的值为val
    const p = new listNode(val)
    // 将p.next指向第一个结点
    p.next = this.dummy.next;
    // dummy.next指向新结点，使之变成第一个结点
    this.dummy.next = p;
    // 注意动静结合原则，添加结点时，注意修改tail指针。
    if (this.tail == this.dummy) {
      this.tail = p;
    }
    // 链表长度+1
    this.length ++
};

```
这段代码有趣的地方在于，当链表为空的时候，它依然是可以工作的。因为虽然链表是空的，但是由于有 dummy 结点的存在，代码并不会遇到空指针。
注意： 如果链表添加了结点，或者删除了结点，一定要记得修改 tail 指针。如果忘了修改，那么就不能正确地获取链表的尾指针，从而错误地访问链表中的数据。

#### （4）查找结点
在查找索引值为 index（假设 index 从 0 开始）的结点时，你需要注意，大多数情况下，返回指定结点前面的一个结点 prev 更加有用。好处有以下两个方面：

通过 prev.next 就可以访问到想要找到的结点，如果没有找到，那么 prev.next 为 null；
通过 prev 可以方便完成后续操作，比如在 target 前面 insert 一个新结点，或者将 target 结点从链表中移出去。

因此，如果要实现 get 函数，应该先实现一个 getPrevNode 函数：

```
MyLinkedList.prototype.getPreNode = function(index) {
    if (index < 0 || index >= this.length) {
      return -1;
    }
    // 初始化front与back，分别一前一后
    let front = this.dummy.next
    let back = this.dummy
    // 在查找的时候，front与back总是一起走
    for (let i = 0; i < index && front != null; i++) {
      back = front;
      front = front.next;
    }
    // 把back做为prev并且返回
    return back
};
```

有了假头的帮助，这段查找代码就非常健壮了，可以处理以下 2 种情况：

如果 target 在链表中不存在，此时 prev 返回链表的最后一个结点；
如果为空链表（空链表指只有一个假头的链表），此时 prev 指向 dummy。也就是说，返回的 prev 指针总是有效的。

借助 getPrevNode 函数来实现 get 函数：

```
MyLinkedList.prototype.get = function(index) {
    // 获取链表中第 index 个结点的值。如果索引无效，则返回-1。
    // index从0开始
    if (index < 0 || index >= this.length) {
      return -1;
    }
    // 因为getPrevNode总是返回有效的结点，所以可以直接取值。
    return this.getPreNode(index).next.val
};
```
（5）插入指定位置之前
插入指定位置的前面，有 4 个需求。

如果 index 大于链表长度，则不会插入结点。
如果 index 等于链表的长度，则该结点将附加到链表的末尾。
如果 index 小于 0，则在头部插入结点。
否则在指定位置前面插入结点。

其中，Case 1~3 较容易处理。可以直接写。重点在于 Case 4。现在已经有了 getPrevNode() 函数，就可以比较容易地写出 Case 4 的代码，思路如下：

使用 getPrevNode() 函数拿到 index 之前的结点 pre；
在 pre 的后面添加一个新结点。

以下是具体的 Case 1~4 的操作过程：

```
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.length) {
    // Case 1.如果 index 大于链表长度，则不会插入结点。
    return;
  } else if (index == this.length) {
    // Case 2.如果 index 等于链表的长度，则该结点将附加到链表的末尾。
    this.addAtTail(val);
  } else if (index <= 0) {
    // Case 3. 如果index小于0，则在头部插入结点。
    this.addAtHead(val);
  } else {
    // Case 4.
    // 得到index之前的结点pre
    const pre = this.getPreNode(index);
    // 在pre的后面添加新结点
    const p = new listNode(val);
    p.next = pre.next;
    pre.next = p;
    // 链表长度+1
    this.length++;
  }
};
```

（6）删除节点
删除结点操作是给定要删除的下标 index（下标从 0 开始），删除的情况分 2 种：

如果 index 无效，那么什么也不做；
如果 index 有效，那么将这个结点删除。

上面这 2 种情况中，Case 1 比较容易处理，相对要麻烦一些的是 Case 2。要删除 index 结点，最好是能找到它前面的结点。有了前面的结点，再删除后面的结点就容易多了。不过已经有了 getPrevNode 函数，所以操作起来还是很简单的。
以下是具体的操作过程

```
MyLinkedList.prototype.deleteAtIndex = function(index) {
  // Case 1. 如果index无效，那么什么也不做。
  if (index < 0 || index >= this.length) {
    return;
  }
  // Case 2. 删除index结点
  // step 1. 找到index前面的结点
  const pre = this.getPreNode(index);
  // step 2. 如果要删除的是最后一个结点，那么需要更改tail指针
  if (this.tail == pre.next) {
    this.tail = pre;
  }
  // step. 3 进行删除操作。并修改链表长度。
  pre.next = pre.next.next;
  this.length--;
};
```
（7）总结
使用哑结点来实现链表的总代码如下：    

```
        /**
* Initialize your data structure here.
*/
var listNode = function(val) {
    this.val = val
    this.next = null
};

var MyLinkedList = function() {
    this.dummy = new listNode()
    this.tail = this.dummy
    this.length = 0
};


/**
* Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.getPreNode = function(index) {
    if (index < 0 || index >= this.length) {
      return -1;
    }
    // 初始化front与back，分别一前一后
    let front = this.dummy.next
    let back = this.dummy
    // 在查找的时候，front与back总是一起走
    for (let i = 0; i < index && front != null; i++) {
      back = front;
      front = front.next;
    }
    // 把back做为prev并且返回
    return back
};

MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.length) {
      return -1;
    }
    
    return this.getPreNode(index).next.val
};

/**
* Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
    // 生成一个结点，存放的值为val
    const p = new listNode(val)
    // 将p.next指向第一个结点
    p.next = this.dummy.next;
    // dummy.next指向新结点，使之变成第一个结点
    this.dummy.next = p;
    // 注意动静结合原则，添加结点时，注意修改tail指针。
    if (this.tail == this.dummy) {
      this.tail = p;
    }
    // 链表长度+1
    this.length ++
};

/**
* Append a node of value val to the last element of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
    // 尾部添加一个新结点
    this.tail.next = new listNode(val)
    // 移动tail指针
    this.tail = this.tail.next;
    // 链表长度+1
    this.length ++
};

/**
* Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.length) {
    // Case 1.如果 index 大于链表长度，则不会插入结点。
    return;
  } else if (index == this.length) {
    // Case 2.如果 index 等于链表的长度，则该结点将附加到链表的末尾。
    this.addAtTail(val);
  } else if (index <= 0) {
    // Case 3. 如果index小于0，则在头部插入结点。
    this.addAtHead(val);
  } else {
    // Case 4.
    // 得到index之前的结点pre
    const pre = this.getPreNode(index);
    // 在pre的后面添加新结点
    const p = new listNode(val);
    p.next = pre.next;
    pre.next = p;
    // 链表长度+1
    this.length++;
  }
};

/**
* Delete the index-th node in the linked list, if the index is valid. 
* @param {number} index
* @return {void}
*/
  
  
MyLinkedList.prototype.deleteAtIndex = function(index) {
  // Case 1. 如果index无效，那么什么也不做。
  if (index < 0 || index >= this.length) {
    return;
  }
  // Case 2. 删除index结点
  // step 1. 找到index前面的结点
  const pre = this.getPreNode(index);
  // step 2. 如果要删除的是最后一个结点，那么需要更改tail指针
  if (this.tail == pre.next) {
    this.tail = pre;
  }
  // step. 3 进行删除操作。并修改链表长度。
  pre.next = pre.next.next;
  this.length--;
};

/** 
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/
```

如果不使用哑结点，而直接初始化head，代码如下：

```
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.head=null
  this.rear=null
  this.len=0
};
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if(index<0||index>this.len-1)
    return -1
  var node=this.head
  while(index-->0){
    if(node.next==null)
      return -1
    node=node.next
  }
  return node.val
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  var node=new ListNode(val)
  if(this.head==null)
    this.rear=node
  else
    node.next=this.head
  this.head=node
  this.len++
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  var node=new ListNode(val)
  if(this.head==null)
    this.head=node
  else
    this.rear.next=node
  this.rear=node
  this.len++
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if(index<=0)
    return this.addAtHead(val)
  if(this.len<index)
    return
  if(index==this.len)
    return this.addAtTail(val)
  var node=this.head
  while(index-->1){
    node=node.next
  }
    
  var newnode=new ListNode(val)
  newnode.next=node.next
  node.next=newnode
  this.len++
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if(index<0||index>this.len-1||this.len==0)
    return
  if(index==0){
    this.head=this.head.next
    this.len--
    return
  }

  var node=this.head
  var myindex=index
  while(index-->1){
    node=node.next
  }
  if(myindex==(this.len-1)){
    this.rear=node
  }
  node.next=node.next.next
  this.len--
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
```


> 这两段代码一对比就能看出来，使用哑结点会简洁很多。

（1）141 环形链表   
（2）142 环形链表 II    
（3）160 相交链表
（4）876 链表的中间结点
（5）234 回文链表
（6）817 链表组件
（7）剑指 Offer 22. 链表中倒数第k个节点