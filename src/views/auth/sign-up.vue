<template>
    <div class="login">
        <div class="login__row">
            <div class="login__col login-side">
                <img src="@/assets/img/logo/logo_flag_navy.svg" class="login-side__logo" alt="">
            </div>
            <div class="login__col login__signup-img"></div>
            <div class="login__col login-form">
                <div class="login__steps">
                    <div class="login__steps-wizard">
                        <svg width="24px" height="24px" class="icon icon-back">
                            <use xlink:href="/sprite.svg#icon-arrow-left"></use>
                        </svg>
                        <div class="steps">
                            <ul>
                                <li class="active">
                                    <span></span>
                                    Personal
                                </li>
                                <li>
                                    <span></span>
                                    Company
                                </li>
                                <li>
                                    <span></span>
                                    Account
                                </li>
                                <li>
                                    <span></span>
                                    Complete
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="login-form__signup">
                        <a href="/sign-in">sign in to your account</a>
                    </div>
                </div>
                <div class="login__form-div">
                    <div class="login__form">
                        <a class="login__logo"><img src="@/assets/img/logo/logo_hero_navy.svg" alt=""></a>
                        <div class="login__steps-wizard login__steps-wizard-second">
                            <svg width="24px" height="24px" class="icon icon-back">
                                <use xlink:href="/sprite.svg#icon-arrow-left"></use>
                            </svg>
                            <div class="steps">
                                <ul>
                                    <li class="active">
                                        <span></span>
                                        Personal
                                    </li>
                                    <li>
                                        <span></span>
                                        Company
                                    </li>
                                    <li>
                                        <span></span>
                                        Account
                                    </li>
                                    <li>
                                        <span></span>
                                        Complete
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="login__stage h5">Your personal  details </div>
                        <p class="login__form-desc">Fill up your account details</p>
                        <div class="login__field">
                            <div class="field__label">name</div>
                            <div class="field__wrap">
                                <input class="field__input" type="text" placeholder="e.g john doe">
                            </div>
                        </div>
                        <div class="login__field">
                            <div class="field__label">email address</div>
                            <div class="field__wrap">
                                <input class="field__input" type="email" placeholder="e.g johndoe@gmail.com">
                            </div>
                        </div>
                        <div class="login__field">
                            <div class="field__label">role</div>
                            <div class="field__wrap">
                                <select name="" class="field__input" id="">
                                    <option value="">
                                        Software Engineer
                                    </option>
                                </select>
                            </div>
                        </div>
                        <a class="login__btn button button--blue-white button_wide">
                            <span>Continue</span>
                            <span>
                                <svg width="24px" height="24px" class="icon icon-link">
                                    <use xlink:href="/sprite.svg#icon-plus-circle"></use>
                                </svg>
                            </span>
                        </a>
                        <div class="login__social-text">
                            <div class="login__text">Or sign up with your social account</div>
                        </div>
                        <a href="" class="login__social-button button button--white-black">
                        <span>
                            Sign up with Google
                        </span>
                            <img src="@/assets/img/google.svg" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    ::-webkit-scrollbar {
        width: 8px;
        background-color: #F5F5F5;
    }
    ::-webkit-scrollbar-track {
        background-color: #F5F5F5;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(128, 129, 145, 0.3);
    }
</style>
