# ⚙️ The Lytopix Engine 

The lytopix engine is capable of rendering + simulating 2D games with a built-in physics system, sound- and, sprite editor.

## 🖼️ 0) Screen

The screen aspect ratio is hard set to `4:3` aspect ratio with a `320px x 240px` resolution which translates to `20x15 sprites`. This is a stylistical rule rather than the limitation of the engine, but this seems ideal for the type of games and programs this engine is built for.  

The screen is composed of `16px x 16px` sprites which you can define programmatically as you fill up the memory space with your custom or built-in sprites. **You can learn more about sprites in the [language-documentation.md file](./language-documentation.md)**

## 🗄️ 1) Layers

The screen renders four layers. 

Three of them is the main layer cluster: they are called `background`, `ground` and `foreground` and an additional layer which is called `adjustment layer`.

You would draw your game in the _main layer cluster_. The three layers enable you to make parallax effects or any kind of layer-based visual effect. 

The _adjustment layer_ is mainly for creating overlays, dialogs, and other special effects for your application.