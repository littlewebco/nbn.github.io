function handleKeyDown() {
    if (event.key === 'Enter') {
      location.href = "https://nbn-service-check.deta.dev/check?address=" + event.target.value;
    }
  };

