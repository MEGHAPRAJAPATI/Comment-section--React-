const useNode = () => {
    const insertNode = function(tree, commentId, item) {
        if (tree.id === commentId) {
            tree.items.push({
                id: new Date().getTime(),
                name: item,
                items: []
            });
            return tree;
        }
        let latestNode = [];
        latestNode = tree.items.map((ob) => {
            return insertNode(ob, commentId, item);
        });
        return { ...tree, items: latestNode };
    };

    const editNode = function(tree, commentId, value) {
        if (tree.id === commentId) {
            tree.name = value;
            return tree;
        }
        tree.items.map((ob) => {
            return editNode(ob, commentId, value);
        });
        return { ...tree };
    };

    const deleteNode = function(tree, id) {
        for (let i = 0; i < tree.items.length; i++) {
            const currentItem = tree.items[i];
            if (currentItem.id === id) {
                tree.items.splice(i, 1);
                return tree;
            } else {
                const result = deleteNode(currentItem, id);
                if (result) return tree;
            }
        }
        return undefined;
    };

    return [insertNode, editNode, deleteNode];
};

export default useNode;
