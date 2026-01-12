function openModalProfile() {
            if (window.matchMedia(`(max-width: ${740}px)`)) {
                if (document.getElementById('optionProfile').classList.contains('rounded-t-2xl')) {
                    gsap.to('#modalProfile', {
                        y: 30,
                        duration: 1,
                        onStart: () => {
                            setTimeout(() => {
                                document.getElementById('optionProfile').classList.remove('rounded-t-2xl')
                            }, 200);
                            setTimeout(() => {
                                document.getElementById('iconProfile').classList.remove('rounded-b-2xl')
                            }, 150);
                            document.getElementById('iconProfile').classList.remove('shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3)]');
                        }
                    })
                } else {
                    gsap.to('#modalProfile', {
                        y: 0,
                        duration: 1,
                        onStart: () => {
                            setTimeout(() => {
                                document.getElementById('iconProfile').classList.add('rounded-b-2xl');
                            }, 200);
                            setTimeout(() => {
                                document.getElementById('optionProfile').classList.add('rounded-t-2xl');
                            }, 400);
                        },
                        onComplete: () => {
                            document.getElementById('iconProfile').classList.add('shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3)]');
                        }
                    })
                }
            } else {
                if (document.getElementById('optionProfile').classList.contains('rounded-t-2xl')) {
                    gsap.to('#modalProfile', {
                        y: 30,
                        duration: 1,
                        onStart: () => {
                            setTimeout(() => {
                                document.getElementById('optionProfile').classList.remove('rounded-t-2xl')
                            }, 50);
                            setTimeout(() => {
                                document.getElementById('iconProfile').classList.remove('rounded-b-2xl')
                            }, 150);
                            document.getElementById('iconProfile').classList.remove('shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3)]');
                        }
                    })
                } else {
                    gsap.to('#modalProfile', {
                        y: 0,
                        duration: 1,
                        onStart: () => {
                            setTimeout(() => {
                                document.getElementById('iconProfile').classList.add('rounded-b-2xl');
                            }, 200);
                            setTimeout(() => {
                                document.getElementById('optionProfile').classList.add('rounded-t-2xl');
                            }, 220);
                        },
                        onComplete: () => {
                            document.getElementById('iconProfile').classList.add('shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3)]');
                        }
                    })
                }
            }

        }