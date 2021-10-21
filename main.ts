type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const getPosts = async function (): Promise<Post[]> {
  const response: any = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.json();
};

const createPosts = function (items: Post): void {
  const box = <HTMLElement>document.getElementById("wrapper");
  const newPostContainer = <HTMLElement>document.createElement("div");
  newPostContainer.setAttribute("class", "post");
  box.appendChild(newPostContainer);

  newPostContainer.innerHTML = `<p class="post__id">ID: ${items.id}</p>
        <p class="post__user">USER ID: ${items.userId}</p>
        <p class="post__title">TITLE: ${items.title}</p>
        <p class="post__body">BODY: ${items.body}</p>`;
};

const showPosts = async function (): Promise<void> {
  const data = await getPosts();
  for (let items of data) {
    createPosts(items);
  }
};

showPosts();
