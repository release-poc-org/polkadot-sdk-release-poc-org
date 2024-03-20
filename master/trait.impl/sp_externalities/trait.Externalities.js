(function() {var implementors = {
"cumulus_test_client":[],
"node_testing":[],
"polkadot_test_client":[],
"sp_state_machine":[["impl&lt;'a, H, B&gt; <a class=\"trait\" href=\"sp_externalities/trait.Externalities.html\" title=\"trait sp_externalities::Externalities\">Externalities</a> for <a class=\"struct\" href=\"sp_state_machine/struct.Ext.html\" title=\"struct sp_state_machine::Ext\">Ext</a>&lt;'a, H, B&gt;<span class=\"where fmt-newline\">where\n    H: Hasher,\n    H::Out: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + 'static + Codec,\n    B: <a class=\"trait\" href=\"sp_state_machine/backend/trait.Backend.html\" title=\"trait sp_state_machine::backend::Backend\">Backend</a>&lt;H&gt;,</span>"],["impl&lt;'a, H: Hasher, B: 'a + <a class=\"trait\" href=\"sp_state_machine/backend/trait.Backend.html\" title=\"trait sp_state_machine::backend::Backend\">Backend</a>&lt;H&gt;&gt; <a class=\"trait\" href=\"sp_externalities/trait.Externalities.html\" title=\"trait sp_externalities::Externalities\">Externalities</a> for <a class=\"struct\" href=\"sp_state_machine/struct.ReadOnlyExternalities.html\" title=\"struct sp_state_machine::ReadOnlyExternalities\">ReadOnlyExternalities</a>&lt;'a, H, B&gt;<span class=\"where fmt-newline\">where\n    H::Out: Encode,</span>"],["impl <a class=\"trait\" href=\"sp_externalities/trait.Externalities.html\" title=\"trait sp_externalities::Externalities\">Externalities</a> for <a class=\"struct\" href=\"sp_state_machine/struct.BasicExternalities.html\" title=\"struct sp_state_machine::BasicExternalities\">BasicExternalities</a>"]],
"substrate_test_runtime_client":[]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()