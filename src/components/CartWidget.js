export default function CartWidget() {
  return (
    <div class="flex justify-between">

  <h1 class="text-3xl font-bold">Tienda Goyeneche</h1>

  <div class = "flex flex-nowrap">
  <input type="text" placeholder="Search" class="input input-bordered input-primary w-full max-w-xs border-double border-4"></input>

    <span class="text-2xl font-bold">8</span>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-9 text-black-400"
        fill="none"
        viewBox="0 2 24 20"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
      </svg>
  </div>
</div>
  )
}
