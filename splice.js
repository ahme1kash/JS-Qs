const items = ["item1", "item2", "item8", "item9", "item5"];
del_items = items.splice(2, 1, "item3", "item4");
console.log(items);
console.log(del_items);

//^ Syntax
//* splice(start_delete_index,numberofitemstodelte,newitemsseparatedbycomma)
