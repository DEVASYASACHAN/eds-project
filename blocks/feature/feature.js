export default function decorate(block) {
  const heading = block.querySelector('h2');
  if (heading) {
    heading.style.color = 'darkblue';
  }
}
