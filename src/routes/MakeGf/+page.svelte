<script>
	export let title = 'Turning Regular Meals Gluten-Free';
</script>

<main class="grid-Main">
	<header class="double-Block">
		<h1>{title}</h1>
		<p>
			Learn how to convert most recipes into safe, delicious gluten-free versions. This guide covers
			ingredient swaps, cross-contamination tips, and smart pantry habits for your generator or
			kitchen.
		</p>

		<nav aria-label="On-page navigation">
			<ul>
				<li><a href="#understand">Understand Gluten’s Role</a></li>
				<li><a href="#grains">Replace Wheat-Based Grains</a></li>
				<li><a href="#binders">Binders &amp; Thickeners</a></li>
				<li><a href="#breading">Breading, Coating &amp; Crusts</a></li>
				<li><a href="#sauces">Hidden Gluten in Sauces</a></li>
				<li><a href="#cross">Avoid Cross-Contamination</a></li>
				<li><a href="#examples">Examples</a></li>
			</ul>
		</nav>
	</header>

	<section id="understand" class="double-Block">
		<h2>1. Understand Gluten’s Role</h2>
		<p>
			Gluten is a protein found in <strong>wheat, barley, rye</strong>, and derivatives. It provides
			structure and chew in baked goods and can act as a thickener or stabilizer. When converting
			recipes:
		</p>
		<ul>
			<li>Identify where wheat or gluten grains are used (flour, breadcrumbs, soy sauce).</li>
			<li>Determine if gluten adds texture, binding, or thickening.</li>
			<li>Match the substitute to that function instead of replacing blindly.</li>
		</ul>
	</section>

	<section id="grains" class="double-Block">
		<h2>2. Replace Wheat-Based Grains &amp; Flours</h2>

		<table>
			<thead>
				<tr>
					<th>Category</th>
					<th>Gluten Ingredient</th>
					<th>Gluten-Free Alternatives</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>Flours (baking)</th>
					<td>All-purpose, whole wheat</td>
					<td
						>Rice, oat (certified GF), almond, sorghum, millet, buckwheat, GF all-purpose blends</td
					>
				</tr>
				<tr>
					<th>Pasta</th>
					<td>Wheat noodles, semolina</td>
					<td>Rice, corn, quinoa, lentil, chickpea, or buckwheat noodles</td>
				</tr>
				<tr>
					<th>Breads &amp; wraps</th>
					<td>Traditional loaves, tortillas</td>
					<td>GF breads, corn tortillas, lettuce wraps, collard leaves</td>
				</tr>
				<tr>
					<th>Grains / sides</th>
					<td>Bulgur, couscous, barley</td>
					<td>Rice, quinoa, millet, buckwheat groats</td>
				</tr>
				<tr>
					<th>Breakfast</th>
					<td>Wheat cereal, granola</td>
					<td>GF oats, puffed rice, corn flakes (GF-labeled)</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section id="binders">
		<h2>3. Binders &amp; Thickeners</h2>
		<p>Gluten provides elasticity and binding in doughs and sauces. Try these instead:</p>
		<ul>
			<li>
				<strong>Xanthan gum</strong> or <strong>guar gum</strong> — small amounts replace gluten’s elasticity.
			</li>
			<li>
				<strong>Cornstarch</strong>, <strong>arrowroot</strong>, <strong>potato starch</strong> — for
				thickening sauces.
			</li>
			<li>
				<strong>Eggs</strong> or <strong>chia / flax “eggs”</strong> — bind batters and baked goods.
			</li>
			<li><strong>Psyllium husk</strong> — improves texture in GF breads.</li>
		</ul>
	</section>

	<section id="breading">
		<h2>4. Breading, Coating &amp; Crusts</h2>
		<p>Instead of wheat flour or breadcrumbs, use:</p>
		<ul>
			<li>Crushed cornflakes or GF cereal</li>
			<li>Rice flour or cornstarch for frying</li>
			<li>Ground nuts, seeds, or GF panko for baked coatings</li>
			<li>Mashed potato flakes for light, crisp texture</li>
		</ul>
	</section>

	<section id="sauces">
		<h2>5. Hidden Gluten in Sauces &amp; Condiments</h2>
		<p>Check labels for these common culprits:</p>
		<ul>
			<li><strong>Soy sauce</strong> → use <em>tamari</em> or GF soy sauce</li>
			<li><strong>Gravy / roux</strong> → thicken with cornstarch or potato starch</li>
			<li><strong>Soups &amp; stocks</strong> → verify gluten-free labeling</li>
			<li><strong>Beer-based marinades</strong> → substitute GF beer or stock</li>
			<li><strong>Imitation crab, malt vinegar, seasoned salt</strong> may contain gluten</li>
		</ul>
	</section>

	<section id="cross">
		<h2>6. Avoid Cross-Contamination</h2>
		<ul>
			<li>Use separate toasters, cutting boards, and utensils for GF food.</li>
			<li>Clean counters and pans thoroughly before cooking.</li>
			<li>Store GF flours and ingredients separately.</li>
			<li>Read every label—even spices or sauces can change formulations.</li>
		</ul>
	</section>

	<section id="examples">
		<h2>7. Examples</h2>

		<article>
			<h3>Spaghetti &amp; Meatballs → GF Spaghetti &amp; Meatballs</h3>
			<p>
				Replace regular pasta with brown rice or chickpea pasta; use GF breadcrumbs in meatballs;
				thicken sauce with tomato paste instead of flour.
			</p>
		</article>

		<article>
			<h3>Fried Chicken → GF Fried Chicken</h3>
			<p>
				Coat chicken in cornstarch or a rice flour blend, then fry as usual. Serve with a
				tamari-based dipping sauce.
			</p>
		</article>

		<article>
			<h3>Mac &amp; Cheese → GF Mac &amp; Cheese</h3>
			<p>
				Use GF elbow pasta and make the roux with butter + cornstarch instead of flour. Add a touch
				of mustard for flavor depth.
			</p>
		</article>
	</section>
</main>

<style>
	:is(ul) {
		margin: var(--space-Qtr);
	}

	/* Tablet Screen  */
	@media (min-width: 768px) {
		:is(ul) {
			margin: var(--space-Half);
		}
	}

	/* Desktop Screen */
	@media (min-width: 1024px) {
		:is(ul) {
			margin: var(--space-Sm);
		}
	}

	/* Large Screen */
	@media (min-width: 1440px) {
		:is(ul) {
			margin: var(--space-Lg);
		}
	}
</style>
