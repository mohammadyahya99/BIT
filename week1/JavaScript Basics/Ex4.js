const posts = [
  {
    id: 1,
    text: "Love this product",
    comments: [],
  },
  {
    id: 2,
    text: "This is the worst. DON'T BUY!",
    comments: [
      { id: 1, text: "Idiot has no idea" },
      { id: 2, text: "Fool!" },
      { id: 3, text: "I agree!" },
    ],
  },
  {
    id: 3,
    text: "So glad I found this. Bought four already!",
    comments: [],
  },
];

for (let outer in posts) {
  if (posts[outer].id == 2) {
    for (let inner in posts[outer].comments) {
      if (posts[outer].comments[inner].id == 3) {
        posts[outer].comments.splice(inner, 1);
        console.log(posts[outer].comments);
      }
    }
  }
}
