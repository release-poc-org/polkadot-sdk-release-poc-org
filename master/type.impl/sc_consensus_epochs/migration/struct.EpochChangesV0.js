(function() {var type_impls = {
"sc_consensus_epochs":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-EpochChangesV0%3CHash,+Number,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_consensus_epochs/migration.rs.html#47-69\">source</a><a href=\"#impl-EpochChangesV0%3CHash,+Number,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Hash, Number, E: <a class=\"trait\" href=\"sc_consensus_epochs/trait.Epoch.html\" title=\"trait sc_consensus_epochs::Epoch\">Epoch</a>&gt; <a class=\"struct\" href=\"sc_consensus_epochs/migration/struct.EpochChangesV0.html\" title=\"struct sc_consensus_epochs::migration::EpochChangesV0\">EpochChangesV0</a>&lt;Hash, Number, E&gt;<span class=\"where fmt-newline\">where\n    Hash: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,\n    Number: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_raw\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_consensus_epochs/migration.rs.html#53-55\">source</a><h4 class=\"code-header\">pub fn <a href=\"sc_consensus_epochs/migration/struct.EpochChangesV0.html#tymethod.from_raw\" class=\"fn\">from_raw</a>(inner: <a class=\"struct\" href=\"fork_tree/struct.ForkTree.html\" title=\"struct fork_tree::ForkTree\">ForkTree</a>&lt;Hash, Number, <a class=\"enum\" href=\"sc_consensus_epochs/enum.PersistedEpoch.html\" title=\"enum sc_consensus_epochs::PersistedEpoch\">PersistedEpoch</a>&lt;E&gt;&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create a new value of this type from raw.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.migrate\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_consensus_epochs/migration.rs.html#58-68\">source</a><h4 class=\"code-header\">pub fn <a href=\"sc_consensus_epochs/migration/struct.EpochChangesV0.html#tymethod.migrate\" class=\"fn\">migrate</a>(self) -&gt; <a class=\"struct\" href=\"sc_consensus_epochs/struct.EpochChanges.html\" title=\"struct sc_consensus_epochs::EpochChanges\">EpochChanges</a>&lt;Hash, Number, E&gt;</h4></section></summary><div class=\"docblock\"><p>Migrate the type into current epoch changes definition.</p>\n</div></details></div></details>",0,"sc_consensus_epochs::migration::EpochChangesV0For"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-EpochChangesV0%3CHash,+Number,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_consensus_epochs/migration.rs.html#28\">source</a><a href=\"#impl-Encode-for-EpochChangesV0%3CHash,+Number,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Hash, Number, E: <a class=\"trait\" href=\"sc_consensus_epochs/trait.Epoch.html\" title=\"trait sc_consensus_epochs::Epoch\">Epoch</a>&gt; Encode for <a class=\"struct\" href=\"sc_consensus_epochs/migration/struct.EpochChangesV0.html\" title=\"struct sc_consensus_epochs::migration::EpochChangesV0\">EpochChangesV0</a>&lt;Hash, Number, E&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"fork_tree/struct.ForkTree.html\" title=\"struct fork_tree::ForkTree\">ForkTree</a>&lt;Hash, Number, <a class=\"enum\" href=\"sc_consensus_epochs/enum.PersistedEpoch.html\" title=\"enum sc_consensus_epochs::PersistedEpoch\">PersistedEpoch</a>&lt;E&gt;&gt;: Encode,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_consensus_epochs/migration.rs.html#30\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_consensus_epochs/migration.rs.html#30\">source</a><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode_to</a>&lt;__CodecOutputEdqy: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    &amp;self,\n    __codec_dest_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __CodecOutputEdqy</a>\n)</h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_consensus_epochs/migration.rs.html#30\">source</a><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_consensus_epochs/migration.rs.html#30\">source</a><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">using_encoded</a>&lt;R, F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; R&gt;(&amp;self, f: F) -&gt; R</h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a>Read more</a></div></details></div></details>","Encode","sc_consensus_epochs::migration::EpochChangesV0For"],["<section id=\"impl-EncodeLike-for-EpochChangesV0%3CHash,+Number,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_consensus_epochs/migration.rs.html#28\">source</a><a href=\"#impl-EncodeLike-for-EpochChangesV0%3CHash,+Number,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Hash, Number, E: <a class=\"trait\" href=\"sc_consensus_epochs/trait.Epoch.html\" title=\"trait sc_consensus_epochs::Epoch\">Epoch</a>&gt; EncodeLike for <a class=\"struct\" href=\"sc_consensus_epochs/migration/struct.EpochChangesV0.html\" title=\"struct sc_consensus_epochs::migration::EpochChangesV0\">EpochChangesV0</a>&lt;Hash, Number, E&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"fork_tree/struct.ForkTree.html\" title=\"struct fork_tree::ForkTree\">ForkTree</a>&lt;Hash, Number, <a class=\"enum\" href=\"sc_consensus_epochs/enum.PersistedEpoch.html\" title=\"enum sc_consensus_epochs::PersistedEpoch\">PersistedEpoch</a>&lt;E&gt;&gt;: Encode,</span></h3></section>","EncodeLike","sc_consensus_epochs::migration::EpochChangesV0For"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-EpochChangesV0%3CHash,+Number,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_consensus_epochs/migration.rs.html#28\">source</a><a href=\"#impl-Decode-for-EpochChangesV0%3CHash,+Number,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Hash, Number, E: <a class=\"trait\" href=\"sc_consensus_epochs/trait.Epoch.html\" title=\"trait sc_consensus_epochs::Epoch\">Epoch</a>&gt; Decode for <a class=\"struct\" href=\"sc_consensus_epochs/migration/struct.EpochChangesV0.html\" title=\"struct sc_consensus_epochs::migration::EpochChangesV0\">EpochChangesV0</a>&lt;Hash, Number, E&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"fork_tree/struct.ForkTree.html\" title=\"struct fork_tree::ForkTree\">ForkTree</a>&lt;Hash, Number, <a class=\"enum\" href=\"sc_consensus_epochs/enum.PersistedEpoch.html\" title=\"enum sc_consensus_epochs::PersistedEpoch\">PersistedEpoch</a>&lt;E&gt;&gt;: Decode,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_consensus_epochs/migration.rs.html#28\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode</a>&lt;__CodecInputEdqy: Input&gt;(\n    __codec_input_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __CodecInputEdqy</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, Error&gt;</h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/1.75.0/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DecodeFinished, Error&gt;<span class=\"where fmt-newline\">where\n    I: Input,</span></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, Error&gt;<span class=\"where fmt-newline\">where\n    I: Input,</span></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a>Read more</a></div></details></div></details>","Decode","sc_consensus_epochs::migration::EpochChangesV0For"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-EpochChangesV0%3CHash,+Number,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_consensus_epochs/migration.rs.html#28\">source</a><a href=\"#impl-Clone-for-EpochChangesV0%3CHash,+Number,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Hash: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, Number: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"sc_consensus_epochs/trait.Epoch.html\" title=\"trait sc_consensus_epochs::Epoch\">Epoch</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"sc_consensus_epochs/migration/struct.EpochChangesV0.html\" title=\"struct sc_consensus_epochs::migration::EpochChangesV0\">EpochChangesV0</a>&lt;Hash, Number, E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_consensus_epochs/migration.rs.html#28\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"sc_consensus_epochs/migration/struct.EpochChangesV0.html\" title=\"struct sc_consensus_epochs::migration::EpochChangesV0\">EpochChangesV0</a>&lt;Hash, Number, E&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","sc_consensus_epochs::migration::EpochChangesV0For"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()