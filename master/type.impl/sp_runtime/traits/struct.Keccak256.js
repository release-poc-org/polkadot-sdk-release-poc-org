(function() {var type_impls = {
"sp_consensus_beefy":[["<section id=\"impl-StructuralEq-for-Keccak256\" class=\"impl\"><a href=\"#impl-StructuralEq-for-Keccak256\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for Keccak256</h3></section>","StructuralEq","sp_consensus_beefy::BeefySignatureHasher","sp_consensus_beefy::MmrHashing"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-Keccak256\" class=\"impl\"><a href=\"#impl-Serialize-for-Keccak256\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for Keccak256</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</span></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","sp_consensus_beefy::BeefySignatureHasher","sp_consensus_beefy::MmrHashing"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Keccak256\" class=\"impl\"><a href=\"#impl-Clone-for-Keccak256\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for Keccak256</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Keccak256</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","sp_consensus_beefy::BeefySignatureHasher","sp_consensus_beefy::MmrHashing"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-Keccak256\" class=\"impl\"><a href=\"#impl-Deserialize%3C'de%3E-for-Keccak256\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for Keccak256</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Keccak256, &lt;__D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</span></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","sp_consensus_beefy::BeefySignatureHasher","sp_consensus_beefy::MmrHashing"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeInfo-for-Keccak256\" class=\"impl\"><a href=\"#impl-TypeInfo-for-Keccak256\" class=\"anchor\">§</a><h3 class=\"code-header\">impl TypeInfo for Keccak256</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Identity\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Identity\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Identity</a> = Keccak256</h4></section></summary><div class='docblock'>The type identifying for which type info is provided. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_info\" class=\"method trait-impl\"><a href=\"#method.type_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">type_info</a>() -&gt; Type</h4></section></summary><div class='docblock'>Returns the static type identifier for <code>Self</code>.</div></details></div></details>","TypeInfo","sp_consensus_beefy::BeefySignatureHasher","sp_consensus_beefy::MmrHashing"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-Keccak256\" class=\"impl\"><a href=\"#impl-Hash-for-Keccak256\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Hash for Keccak256</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Output</a> = H256</h4></section></summary><div class='docblock'>The hash type produced.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ordered_trie_root\" class=\"method trait-impl\"><a href=\"#method.ordered_trie_root\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">ordered_trie_root</a>(\n    input: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;&gt;,\n    version: <a class=\"enum\" href=\"sp_storage/enum.StateVersion.html\" title=\"enum sp_storage::StateVersion\">StateVersion</a>\n) -&gt; &lt;Keccak256 as Hash&gt;::Output</h4></section></summary><div class='docblock'>The ordered Patricia tree root of the given <code>input</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.trie_root\" class=\"method trait-impl\"><a href=\"#method.trie_root\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">trie_root</a>(\n    input: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;(<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;)&gt;,\n    version: <a class=\"enum\" href=\"sp_storage/enum.StateVersion.html\" title=\"enum sp_storage::StateVersion\">StateVersion</a>\n) -&gt; &lt;Keccak256 as Hash&gt;::Output</h4></section></summary><div class='docblock'>The Patricia tree root of the given mapping.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">hash</a>(s: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; Self::Output</h4></section></summary><div class='docblock'>Produce the hash of some byte-slice.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_of\" class=\"method trait-impl\"><a href=\"#method.hash_of\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">hash_of</a>&lt;S&gt;(s: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;S</a>) -&gt; Self::Output<span class=\"where fmt-newline\">where\n    S: Encode,</span></h4></section></summary><div class='docblock'>Produce the hash of some codec-encodable value.</div></details></div></details>","Hash","sp_consensus_beefy::BeefySignatureHasher","sp_consensus_beefy::MmrHashing"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hasher-for-Keccak256\" class=\"impl\"><a href=\"#impl-Hasher-for-Keccak256\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Hasher for Keccak256</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Out\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Out\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Out</a> = H256</h4></section></summary><div class='docblock'>The output type of the <code>Hasher</code></div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.StdHasher\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.StdHasher\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">StdHasher</a> = Hash256StdHasher</h4></section></summary><div class='docblock'>What to use to build <code>HashMap</code>s with this <code>Hasher</code>.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.LENGTH\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.LENGTH\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">LENGTH</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a> = 32usize</h4></section></summary><div class='docblock'>The length in bytes of the <code>Hasher</code> output.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">hash</a>(s: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; &lt;Keccak256 as Hasher&gt;::Out</h4></section></summary><div class='docblock'>Compute the hash of the provided slice of bytes returning the <code>Out</code> type of the <code>Hasher</code>.</div></details></div></details>","Hasher","sp_consensus_beefy::BeefySignatureHasher","sp_consensus_beefy::MmrHashing"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Keccak256\" class=\"impl\"><a href=\"#impl-PartialEq-for-Keccak256\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for Keccak256</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;Keccak256) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","sp_consensus_beefy::BeefySignatureHasher","sp_consensus_beefy::MmrHashing"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Keccak256\" class=\"impl\"><a href=\"#impl-Debug-for-Keccak256\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for Keccak256</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","sp_consensus_beefy::BeefySignatureHasher","sp_consensus_beefy::MmrHashing"],["<section id=\"impl-Eq-for-Keccak256\" class=\"impl\"><a href=\"#impl-Eq-for-Keccak256\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for Keccak256</h3></section>","Eq","sp_consensus_beefy::BeefySignatureHasher","sp_consensus_beefy::MmrHashing"],["<section id=\"impl-StructuralPartialEq-for-Keccak256\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-Keccak256\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for Keccak256</h3></section>","StructuralPartialEq","sp_consensus_beefy::BeefySignatureHasher","sp_consensus_beefy::MmrHashing"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()