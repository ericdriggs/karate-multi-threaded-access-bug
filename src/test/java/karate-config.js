function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    env: env,
    myVarName: 'someValue'
  }

  config = karate.callSingle('classpath:setup-util.feature', config);
  if (env == 'dev') {
    // customize
    // e.g. config.foo = 'bar';
  } else if (env == 'e2e') {
    // customize
  }
  return config;
}

//works with karate.call but karate.callOnce results in:
// ERROR com.intuit.karate - classpath:examples/add-vals-test1.feature:10
// * match addVals(2, 2) == (2 + 2)
// js failed:
//     >>>>
// 01: addVals(2, 2)
// <<<<
// org.graalvm.polyglot.PolyglotException: Multi threaded access requested by thread Thread[pool-1-thread-2,5,main] but is not allowed for language(s) js.
// - com.oracle.truffle.polyglot.PolyglotEngineException.illegalState(PolyglotEngineException.java:129)
// - com.oracle.truffle.polyglot.PolyglotContextImpl.throwDeniedThreadAccess(PolyglotContextImpl.java:1034)
// - com.oracle.truffle.polyglot.PolyglotContextImpl.checkAllThreadAccesses(PolyglotContextImpl.java:893)
// - com.oracle.truffle.polyglot.PolyglotContextImpl.enterThreadChanged(PolyglotContextImpl.java:723)
// - com.oracle.truffle.polyglot.PolyglotEngineImpl.enterCached(PolyglotEngineImpl.java:1991)
// - com.oracle.truffle.polyglot.HostToGuestRootNode.execute(HostToGuestRootNode.java:110)
// - org.graalvm.polyglot.Value.execute(Value.java:841)
