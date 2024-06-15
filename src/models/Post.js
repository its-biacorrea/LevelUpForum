export default class Post {
  constructor(likes) {
    this.likes = likes;
  }

  verificarLike() {
    return this.likes + 1;
  }
}
