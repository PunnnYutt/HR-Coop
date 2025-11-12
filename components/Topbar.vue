<template>
  <div class="bar">
    <div class="logo-section">
      <img src="../assets/images/inet_logo.png" alt="logo_nav" />
      <p>HR Management</p>
    </div>

    <div class="user-section">
      <img src="../assets/images/user.png" alt="user" class="user-img" />
      <div class="user-info-section">
        <p class="user-name">ปัณณวิชญ์ ยุทธกล้า</p>
        <p class="user-role">User</p>
      </div>
      <div class="user-icon">
        <svg
          width="11"
          height="6"
          viewBox="0 0 11 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.31429 0.264144L5.49487 3.79971L1.67545 0.264144C1.58431 0.179781 1.47612 0.112861 1.35704 0.0672039C1.23797 0.0215469 1.11034 -0.00195312 0.981454 -0.00195312C0.852568 -0.00195313 0.724944 0.0215469 0.605868 0.0672039C0.486793 0.112861 0.378598 0.179781 0.287462 0.264144C0.196325 0.348508 0.124032 0.448661 0.074709 0.558887C0.0253863 0.669113 -9.60277e-10 0.787252 0 0.90656C9.6028e-10 1.02587 0.0253863 1.14401 0.074709 1.25423C0.124032 1.36446 0.196325 1.46461 0.287462 1.54898L4.8058 5.73151C5.18971 6.08689 5.80987 6.08689 6.19378 5.73151L10.7121 1.54898C10.8034 1.46467 10.8758 1.36454 10.9252 1.25431C10.9746 1.14407 11 1.0259 11 0.90656C11 0.787218 10.9746 0.669048 10.9252 0.558813C10.8758 0.448579 10.8034 0.348445 10.7121 0.264144C10.3282 -0.0821222 9.6982 -0.0912345 9.31429 0.264144Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
div.bar {
  background-color: #58a144;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
}

.bar .logo-section {
  display: flex;
  margin: 12px auto 12px 16px;
}

.v-application .logo-section p {
  margin-bottom: 0px !important;
}

.logo-section p {
  margin-left: 24px;
  align-self: center;
  font-weight: 700;
  font-family: "Sarabun", sans-serif;
  line-height: 24px;
  color: #ffffff;
}

.bar .user-section {
  display: flex;
  justify-content: space-between;
  margin: 7px 32px 7px auto;
  background-color: #e5efff66;
  border-radius: 8px;
  width: auto;
  height: 42px;
}

.user-name {
  font-size: 12px;
  font-weight: 400;
  font-family: "Sarabun", sans-serif;
  line-height: 16px;
  color: #ffffff;
  margin: 5px 6px 2px 12px;
}

.user-role {
  font-weight: 400;
  font-family: "Sarabun", sans-serif;
  line-height: 14px;
  color: #f2f2f2;
  font-size: 10px;
  margin: 2px 6px 5px 12px;
}

.user-img {
  width: 32px;
  height: 32px;
  margin: 5px 12px 5px 8px;
}

div.user-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 9px 8px 9px 0;
  width: 24px;
  height: 24px;
}

.user-info-section {
  display: flex;
  flex-direction: column;
  width: auto;
  height: 16px;
}

.user-section:hover {
  background-color: rgb(192, 227, 186);
  cursor: pointer;
}

p {
  user-select: none;
}
</style>
