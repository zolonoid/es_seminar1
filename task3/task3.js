// Напишите рекурсивную функцию findElementByClass,
// которая принимает короневой элемент дерева DOM и название класса в качесте аргументов
// и возвращает первый найденный элемент с указанным классом в этом дереве.

function findElementByClass(root, className) {
    for (let i = 0; i < root.children.length; i++) {
        let element = root.children[i].className == className
            ? root.children[i]
            : findElementByClass(root.children[i], className);
        if (element != null) return element;
    }
    return null;
}

alert(findElementByClass(document.getElementById("root"), "my-class").textContent);
