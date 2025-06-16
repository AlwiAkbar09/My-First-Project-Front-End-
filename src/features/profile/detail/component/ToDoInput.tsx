"use client";

import React, { useState } from "react";

interface Todo {
    text: string;
    status: boolean;
}

export default function ToDoInput() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (e: React.FormEvent) => {
        e.preventDefault(); // Mencegah form submit mereload halaman
        if (inputValue.trim() === "") return; // Mencegak To Do Kosong

        const newTodo: Todo = {
            text: inputValue.trim(),
            status: false, // Status awal: belum dicentang
        };
        setTodos((prevTodos) => [...prevTodos, newTodo]); // Tambahkan todo baru ke daftar
        setInputValue(""); // Kosongkan input
    };

    const toggleTodo = (index: number) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo, i) =>
                i === index ? { ...todo, status: !todo.status } : todo
            )
        );
    };

    return (
        <>
            <div className="absolute top-[108px] sm:top-[158px] left-1/2 -translate-x-1/2 flex flex-col gap-y-6 items-center w-full">
                <form
                    onSubmit={addTodo}
                    className=" 
                        flex items-center
                        w-[327px] h-[48px]
                        sm:w-[540px] sm:h-[64px]
                        rounded-md
                        bg-white
                        p-4
                        gap-2
                        shadow-sm"
                >
                    <input
                        type="radio"
                        disabled
                        className="
                            w-[24px]
                            h-[24px]
                            rounded-full
                            border-gray-500
                            border-[1px]"
                    />

                    <input
                        type="text"
                        placeholder="Create new todo..."
                        id="font-custom"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="
                        flex-grow
                        border-none
                        focus:outline-none
                    "
                    />
                </form>
                <div
                    id="font-custom"
                    className="
                            bg-white 
                            rounded-md 
                            shadow-sm 
                            w-full 
                            max-w-[327px] sm:max-w-[540px] 
                            mx-auto 
                            h-auto"
                >
                    <ul className="relative divide-y divide-gray-300">
                        {todos.map((todo, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-x-2 p-4"
                            >
                                <input
                                    type="checkbox"
                                    className="
                                    relative
                                    peer
                                    checked:after:content-['✔']
                                    checked:after:absolute
                                    checked:after:inset-0
                                    checked:after:flex
                                    checked:after:items-center
                                    checked:after:justify-center
                                    checked:after:text-white
                                    checked:after:text-sm
                                    w-[24px] h-[24px]
                                    border-[1px] border-gray-400
                                    rounded-full
                                    appearance-none
                                    checked:bg-[linear-gradient(to_bottom,_#5596FF,_#AC2DEB)]"
                                    checked={todo.status}
                                    onChange={() => toggleTodo(index)}
                                />
                                <span className="peer-checked:line-through peer-checked:text-gray-400">
                                    {todo.text}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
