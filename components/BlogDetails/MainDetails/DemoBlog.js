/* eslint-disable @next/next/no-img-element */
import React from 'react'

const DemoBlog = () => {
  return (
    <div className="text-white">
      <h1 className="pt-8 text-6xl">Algorithms and Data Structure - Part 1</h1>
      <p>by Abdul Bari</p>
      <br />
      <p>
        A look at the core data structures and algorithms used in day-to-day
        appliications.
      </p>
      <br />
      <h1 className="text-4xl">What you will learn</h1>
      <br />
      <h4 className="text-xl">
        In this course we will look at the core data structures and algorithms
        used in everyday applications. We will discuss the trade-offs involved
        with choosing each data structure, along with traversal, retrieval, and
        update algorithms. This is part 1 of a two-part series of courses
        covering algorithms and data structures. In this part we cover linked
        lists, stacks, queues, binary trees, and hash tables.{' '}
      </h4>
      <br />
      <h4 className="text-xl">
        A data structure is a named location that can be used to store and
        organize data. And, an algorithm is a collection of steps to solve a
        particular problem. Learning data structures and algorithms allow us to
        write efficient and optimized computer programs.
      </h4>
      <h4 className="text-xl">
        A computer program is a collection of instructions to perform a specific
        task. For this, a computer program may need to store data, retrieve
        data, and perform computations on the data.
      </h4>
      <h4 className="text-xl">
        A data structure is a named location that can be used to store and
        organize data. And, an algorithm is a collection of steps to solve a
        particular problem. Learning data structures and algorithms allow us to
        write efficient and optimized computer programs.
      </h4>
      <h4 className="text-xl">
        Our DSA tutorial will guide you to learn different types of data
        structures and algorithms and their implementations in Python, C, C++,
        and Java.{' '}
      </h4>
      <br />
      <h4 className="text-4xl">Stack Data Structure</h4>
      <br />
      <h4 className="text-xl">
        In this tutorial, you will learn about the stack data structure and its
        implementation in Python, Java and C/C++. A stack is a linear data
        structure that follows the principle of Last In First Out (LIFO). This
        means the last element inserted inside the stack is removed first. You
        can think of the stack data structure as the pile of plates on top of
        another.{' '}
      </h4>
      <br />
      <img
        className="mx-auto"
        src="https://cdn.programiz.com/sites/tutorial2program/files/stack-of-plates_0.png"
        alt=""
      />
      <br />
      <h1>Here, you can:</h1>
      <br />
      <ul>
        <li>Put a new plate on top</li>
        <li>Remove the top plate</li>
      </ul>
      <h1 className="text-xl">
        And, if you want the plate at the bottom, you must first remove all the
        plates on top. This is exactly how the stack data structure works.{' '}
      </h1>
      <br />
      <h1 className="text-4xl">LIFO Principle of Stack</h1>
      <br />
      <h1 className="text-xl">
        In programming terms, putting an item on top of the stack is called push
        and removing an item is called pop.{' '}
      </h1>
      <br />
      <img
        src="https://cdn.programiz.com/sites/tutorial2program/files/stack.png"
        alt=""
      />
      <br />
      <p>
        In the above image, although item 3 was kept last, it was removed first.
        This is exactly how the LIFO (Last In First Out) Principle works. We can
        implement a stack in any programming language like C, C++, Java, Python
        or C#, but the specification is pretty much the same.{' '}
      </p>
      <br />
      <h1 className="text-4xl">Working of Stack Data Structure</h1>
      <p>
        The operations work as follows: <br />
        1. A pointer called TOP is used to keep track of the top element in the
        stack. <br />
        2. When initializing the stack, we set its value to -1 so that we can
        check if the stack is empty by comparing TOP == -1. <br />
        3. On pushing an element, we increase the value of TOP and place the new
        element in the position pointed to by TOP. <br />
        4. On popping an element, we return the element pointed to by TOP and
        reduce its value. <br />
        5. Before pushing, we check if the stack is already full <br />
        6. Before popping, we check if the stack is already empty
      </p>
      <br />
      <img
        src="https://cdn.programiz.com/sites/tutorial2program/files/stack-operations.png"
        alt=""
      />
      <br />
    </div>
  )
}

export default DemoBlog
